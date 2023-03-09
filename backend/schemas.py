from pydantic import BaseModel, Field

class Product(BaseModel):
    product_name: str = Field(min_length=1, max_length=100)
    description: str = Field(min_lenght=1, max_length=1000)
    quantity: int = Field(min=0)

class User(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    email: str = Field(min_lenght=1, max_length=1000)
    password: str = Field(min=0)
    phone_number: str = Field(min=0)