import base64
import os
from fastapi import FastAPI, Depends, File, HTTPException, UploadFile, status
# Database Imports
from datetime import datetime, timedelta
import models
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from schemas import Product, User, Company
from database import engine, SessionLocal
from sqlalchemy.orm import Session, subqueryload
from typing import Optional, Union
from pydantic import BaseModel
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from passlib.context import CryptContext
from jose import JWTError, jwt
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from twilio.twiml.messaging_response import MessagingResponse
from models import CategoryEnum
import os
from twilio.rest import Client

media_directory = os.getcwd() + "/media/"
DEFAULT_IMAGE = os.getcwd()+"/media/DEFAULT.jpg"

app = FastAPI()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:3002"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Creates the database and table if it doesn't already exist
models.Base.metadata.create_all(bind=engine)

def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()

@app.post("/connected")
def connect():
    print("THIS METHOD WAS CALLED")
    return "CONNECTED"

@app.get("/products/all")
def all_products(db: Session = Depends(get_db)):
    return db.query(models.Products).all()
    # myDict = db.query(models.Products).all()


@app.get("/products/category")
def ret_products_by_cate(product_cate: CategoryEnum,db: Session = Depends(get_db)):
    return db.query(models.Products).filter_by(category=product_cate).all()


@app.get("/products/company")
def ret_products_by_comp(product_comp: int,db: Session = Depends(get_db)):
    return db.query(models.Products).filter_by(id=product_comp).all()


@app.post("/products/create")
def create_product(product: Product = Depends(), file: Union[UploadFile, None] = None, db: Session = Depends(get_db)):
    
    product_model = models.Products()
    product_model.name = product.product_name
    product_model.description = product.description
    product_model.category = product.category
    product_model.is_featured = product.is_featured
    product_model.is_open = product.is_open 
    product_model.price = product.price

    product_model.company_id = product.company_id
    product_model.company = db.query(models.Companys).filter_by(company_id=product.company_id).first()


    image_path = media_directory+str(product.product_name.replace(" ", "")+str("-")+str(datetime.now())[0:10]+str(".jpg"))

    if(file is not None):
        with open(image_path,'wb') as image:
            image.write(file.file.read())
            image.close()


            product_model.path_to_image = image_path

    db.add(product_model)
    db.commit()

    return product



@app.get("/products/image")
def ret_products_image(product_key: int,db: Session = Depends(get_db)):
    path = db.query(models.Products).get(product_key).path_to_image


    if(path is not None):
        with open(path, "rb") as image_file:
            encoded_image_string = base64.b64encode(image_file.read())

            ret_dict = {"encode_image":encoded_image_string,
                        "key":product_key}

        return ret_dict
    else:
        with open(DEFAULT_IMAGE, "rb") as image_file:
    
            encoded_image_string = base64.b64encode(image_file.read())

            ret_dict = {"encode_image":encoded_image_string,
                        "key":product_key}

        return ret_dict

@app.post("/companies/create")
def create_company(company: Company = Depends(), file: Union[UploadFile, None] = None, db: Session = Depends(get_db)):
    company_model = models.Companys()

    company_model.name = company.company_name
    company_model.description = company.description
    company_model.company_link = company.link

    image_path = media_directory+str(company.company_name.replace(" ", "")+str("-")+str(datetime.now())[0:10]+str(".jpg"))

    if(file is not None):
        with open(image_path,'wb') as image:
            image.write(file.file.read())
            image.close()


            company_model.path_to_image = image_path

    company_model.hashed_password = get_password_hash(company.password)

    db.add(company_model)
    db.commit()

    return company

@app.get("/companies/")
def get_companies(company_id: int, db: Session = Depends(get_db)):
    companies = db.query(models.Companys).filter_by(company_id=company_id).first()
    products = db.query(models.Products).filter_by(company_id=company_id).all()
    return {"company":companies,"products":products}

@app.get("/companies/image")
def ret_products_image(company_key: int,db: Session = Depends(get_db)):
    path = db.query(models.Companys).get(company_key).path_to_image

    if(path is not None):
        with open(path, "rb") as image_file:
            encoded_image_string = base64.b64encode(image_file.read())

            ret_dict = {"encode_image":encoded_image_string,
                        "key":company_key}

        return ret_dict
    else:
        with open(DEFAULT_IMAGE, "rb") as image_file:
    
            encoded_image_string = base64.b64encode(image_file.read())

            ret_dict = {"encode_image":encoded_image_string,
                        "key":company_key}

        return ret_dict

@app.get("/users")
def all_users(db: Session = Depends(get_db)):
    return db.query(models.Users).all()

@app.post("/createUser")
def create_user(user: User, db: Session = Depends(get_db)):    
    user_model = models.Users()
    user_model.username = user.username
    user_model.email = user.email
    user_model.full_name = user.full_name
    user_model.phone_number = "+1"+user.phone_number
    user_model.hashed_password = get_password_hash(user.hashed_password)
    db.add(user_model)
    db.commit()

    return user



@app.post("/sms")
def sms_reply(db: Session = Depends(get_db)):

    with open("API-KEY-DO-NOT-GIT.txt", 'r') as f:
        lines = f.readlines()

        account_sid = lines[0]
        auth_token = lines[1]

    print(account_sid)
    print(auth_token)

    client = Client(account_sid, auth_token)

    users = db.query(models.Users).all()
    for user in users:
        
        message = client.messages.create(
            body="DROPR ALERT: Hello "+user.full_name+", This is a test of the dropr sms system",
            from_="+18339172623",
            to=user.phone_number
        )
    return 0

class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: Optional[str] = None


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password):
    return pwd_context.hash(password)


async def get_user(db: AsyncSession, email: str) -> models.Users:
    result = db.execute(select(models.Users).filter_by(email=email))
    return result.scalars().first()

async def get_user_username(db: AsyncSession, username: str) -> models.Users:
    result = db.execute(select(models.Users).filter_by(username=username))
    return result.scalars().first()


async def authenticate_user(db: AsyncSession, username: str, password: str) -> models.Users:
    user = await get_user(db, username)
    if not user:
        return False
    if not verify_password(password, user.hashed_password):
        return False
    return user


def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


async def get_current_user(db: AsyncSession = Depends(get_db), token: str = Depends(oauth2_scheme)) -> models.Users:
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except JWTError:
        raise credentials_exception
    user = await get_user_username(db, username=token_data.username)
    if user is None:
        raise credentials_exception
    return user


async def get_current_active_user(current_user: User = Depends(get_current_user)) -> models.Users:
    if current_user.disabled:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user


@app.post("/token", response_model=Token)
async def login_for_access_token(db: AsyncSession = Depends(get_db), form_data: OAuth2PasswordRequestForm = Depends()):
    user = await authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}


@app.get("/users/me/", response_model=User)
async def read_users_me(current_user: User = Depends(get_current_user)):
    return current_user