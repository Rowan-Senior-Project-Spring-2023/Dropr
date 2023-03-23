from sqlalchemy import Column, Integer, String
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
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    password = Column(String)
    phone_number = Column(String)

class Users_Products(Base):
    __tablename__ = "users_products"

    user_id = Column(Integer)
    product_id = Column(Integer)
    purchased = Column(Integer)

class Images(Base):
    __tablename__ = "images"

    id = Column(Integer, primary_key=True, index=True)
    image_url = Column(String)

