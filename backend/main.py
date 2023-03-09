from fastapi import FastAPI, Depends

# Database Imports
import models
from schemas import Product, User
from database import engine, SessionLocal
from sqlalchemy.orm import Session

app = FastAPI()

# Creates the database and table if it doesn't already exist
models.Base.metadata.create_all(bind=engine)

def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()

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



