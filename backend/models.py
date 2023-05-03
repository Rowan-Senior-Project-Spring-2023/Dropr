
import enum
from sqlalchemy import Column, DateTime, Integer, String, Boolean, Enum, ForeignKey, DECIMAL
from sqlalchemy.orm import relationship
from typing import Optional
from database import Base

class CategoryEnum(str, enum.Enum):
    footwear = 'footwear'
    shirts = 'shirts'
    pants = 'pants'
    jewerly = 'jewerly'
    tech = 'tech'
    headwear = 'headwear'
    other = 'other'

class Users(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    phone_number = Column(String(12))
    full_name = Column(String, index=True)
    disabled = Column(Boolean, default=False)
    hashed_password = Column(String)

class Companys(Base):
    __tablename__ = 'companies'

    company_id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    description = Column(String, index=True)
    company_link = Column(String, nullable=True, index=True)
    image_link = Column(String, nullable=True)
    hashed_password = Column(String)

class Products(Base):
    __tablename__ = "products"

    name = Column(String)
    id = Column(Integer, primary_key=True, index=True)
    description = Column(String)
    price = Column(DECIMAL)
    quantity = Column(Integer)
    is_open = Column(Boolean)
    is_featured = Column(Boolean)
    category = Column(Enum(CategoryEnum),nullable=True)

    company_id = Column(Integer, ForeignKey('companies.company_id'))
    company = relationship(Companys)

<<<<<<< HEAD
    path_to_image = Column(String, nullable=True)
=======
    image_link = Column(String, nullable=True)

class Products_User(Base):
    __tablename__ = "products_user"

    table_id = Column(Integer, primary_key=True, index=True)
    user = Column(Integer, ForeignKey('users.id'))
    product = Column(Integer, ForeignKey('products.id'))
    quant = Column(Integer)

class Users_Company(Base):
    __tablename__ = "users_company"

    table_id = Column(Integer, primary_key=True, index=True)
    user = Column(Integer, ForeignKey('users.id'))
    company = Column(Integer, ForeignKey('companies.company_id'))
>>>>>>> 6c937a1dc2a7687141c46ae07ad90627add54d69
