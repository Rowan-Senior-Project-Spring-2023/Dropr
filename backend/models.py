import enum
from sqlalchemy import Column, DateTime, Integer, String, Boolean, Enum
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

class Products(Base):
    __tablename__ = "products"

    name = Column(String)
    id = Column(Integer, primary_key=True, index=True)
    description = Column(String)
    start_quantity = Column(Integer)
    remaining_quantity = Column(Integer)
    limit_per_user = Column(Integer)
    is_open = Column(Boolean)
    is_featured = Column(Boolean)
    category = Column(Enum(CategoryEnum),nullable=True)

    created_at = Column(DateTime)
    updated_at = Column(DateTime)
    deleted_at = Column(DateTime, nullable=True)

    path_to_image = Column(String, nullable=True)

class Users(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    full_name = Column(String, index=True)
    disabled = Column(Boolean, default=False)
    hashed_password = Column(String)

