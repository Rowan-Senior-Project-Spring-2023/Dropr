
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
    path_to_image = Column(String, nullable=True)
    hashed_password = Column(String)

class Products(Base):
    __tablename__ = "products"

    name = Column(String)
    id = Column(Integer, primary_key=True, index=True)
    description = Column(String)
    price = Column(DECIMAL)
    is_open = Column(Boolean)
    is_featured = Column(Boolean)
    category = Column(Enum(CategoryEnum),nullable=True)

    company_id = Column(Integer, ForeignKey('companies.company_id'))
    company = relationship(Companys)

    path_to_image = Column(String, nullable=True)
