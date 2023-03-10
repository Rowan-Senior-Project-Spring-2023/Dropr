from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware

# Database Imports
import models
from schemas import Product, User
from database import engine, SessionLocal
from sqlalchemy.orm import Session

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000"
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

@app.get("/products")
def all_products(db: Session = Depends(get_db)):
    return db.query(models.Products).all()

@app.post("/products")
def create_product(product: Product, db: Session = Depends(get_db)):
    
    product_model = models.Products()
    product_model.name = product.product_name
    product_model.description = product.description
    product_model.quantity = product.quantity

    db.add(product_model)
    db.commit()

    return product


@app.get("/users")
def all_users(db: Session = Depends(get_db)):
    return db.query(models.Users).all()

@app.post("/users")
def create_product(user: User, db: Session = Depends(get_db)):
    
    user_model = models.Users()
    user_model.name = user.name
    user_model.email = user.email
    user_model.password = user.password
    user_model.phone_number = user.phone_number

    db.add(user_model)
    db.commit()

    return user



