from sqlalchemy import Column, Integer, String, Boolean
from typing import Optional
from database import Base

class Products(Base):
    __tablename__ = "products"

    name = Column(String)
    id = Column(Integer, primary_key=True, index=True)
    description = Column(String)
    start_quantity = Column(Integer)
    quantity = Column(Integer)
    limit_per_user = Column(Integer)
    is_open = Column(Integer)
    is_featured = Column(Integer)

    
class Users(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    full_name = Column(String, index=True)
    disabled = Column(Boolean, default=False)
    hashed_password = Column(String)

class Users_Products(Base):
    __tablename__ = "users_products"

    user_id = Column(Integer)
    product_id = Column(Integer)
    purchased = Column(Integer)

class Images(Base):
    __tablename__ = "images"

    id = Column(Integer, primary_key=True, index=True)
    image_url = Column(String)

