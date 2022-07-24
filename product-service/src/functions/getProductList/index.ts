import { handlerPath } from "@libs/handler-resolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.getProductListHandler`,
  events: [
    {
      http: {
        method: "get",
        path: "products",
        cors: true,
        documentation: {
          description: "Get the product list",
          methodResponses: [
            {
              statusCode: "200",
              responseModels: {
                "application/json": "ProductList",
              },
            },
          ],
        },
      },
    },
  ],
};
