from fastapi import FastAPI

app = FastAPI()

'''
[api/user/:userId]
Returns user information/fields
[api/company/:companyId]
Returns company information/fields
[api/products/:companyId/all/get]
Returns a list of all the products registered to the company
[api/products/:companyId/open/get]
Returns a list of all open products registered to the company
[api/products/:companyId/featured/get]
Returns a list of all featured products registered to the company
[api/products/:productId/post]
Needs to send all info for making new product through the Post
Boolean field for notify subscription base on add or not
[api/products/:productId/delete]
Needs to send product name or id, will set product to closed and deletedAt
[api/products/:productId/patch]
Needs to send product name or id, will set product to closed
[api/products/featured/get]
Returns a list of all featured, opened products
[api/products/open/get]
Returns a list of open products
'''

@app.get("/api/user/{user_id}")
async def read_user(user_id: int):
    return {"user_id": user_id}

@app.get("/")
async def root():
    return {"message": "Hello World"}

    
@app.get("/api/company/{company_id}/all/")
async def read_company_products(company_id: int):
    return {"company": company_id,
            "products": "dummy data"}

@app.get("/api/company/{company_id}/open/")
async def read_company_products(company_id: int):
    return {"company": company_id,
            "products": "dummy data"}

@app.post("/api/company/{company_id}/create_product")
async def company_create_item(company_id: int, item: str):
    print("adding "+item+" to "+str(company_id))
    return item


@app.get("/api/company/{company_id}")
async def read_company(company_id: int):
    return {"company": company_id}