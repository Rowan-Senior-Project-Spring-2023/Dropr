from fastapi import FastAPI, Depends

# Database Imports
import models
from schemas import Product
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
    product_model.product_name = product.product_name
    product_model.description = product.description
    product_model.quantity = product.quantity

    db.add(product_model)
    db.commit()

    return product


