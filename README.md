# AWS BE Testing Repository (backend-test) 

### Service Product API:
- GET getProductList - https://qe2bvrcvdc.execute-api.eu-west-1.amazonaws.com/dev/products
- GET getProductById - https://qe2bvrcvdc.execute-api.eu-west-1.amazonaws.com/dev/products/3ba6a9a3-20f1-4b58-83c2-b84fea82bc1f
- POST createProduct - https://qe2bvrcvdc.execute-api.eu-west-1.amazonaws.com/dev/products

Product example:
```
{
    "name": "Hearthstone",
    "description": "Deceptively simple and insanely fun, Hearthstone is a fast-paced strategy card game from Blizzard Entertainment.",
    "price": 50,
    "count": 10
}
```

### Service Import Product API:
- GET importProductsFile - https://w7q5dzf57j.execute-api.eu-west-1.amazonaws.com/dev/import?name=

### FE repository:
- https://github.com/eleave/shop-react-redux-cloudfront

### Swagger OpenAPI File:
- https://github.com/eleave/backend-test/blob/task-4/product-service/openapi.yml
