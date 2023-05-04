from pydantic import BaseModel, Field
from typing import Optional
from models import CategoryEnum

class Company(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    description: str = Field(min_lenght=1, max_length=1000)
    link: str
    password: str
    image_link: str

class Product(BaseModel):
    product_name: str = Field(min_length=1, max_length=100)
    description: str = Field(min_lenght=1, max_length=1000)
    price: float = Field(min=0)
    category: CategoryEnum = Field(min=0)
    quantity: int = Field(min=1)
    image_link: str
    company_name: str
    company_password: str
    is_open: bool
    is_featured: bool
    

class User(BaseModel):
    id: int
    username: str = Field(min_length=1, max_length=100)
    email: str = Field(min_lenght=1, max_length=1000)
    hashed_password: str = Field(min=0)
    phone_number: str 
    full_name: str


    class Config:
        orm_mode = True


