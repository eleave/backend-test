import { handlerPath } from "@libs/handler-resolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.getProductByIdHandler`,
  events: [
    {
      http: {
        method: "get",
        path: "products/{productId}",
        cors: true,
        documentation: {
          description: "Get product by productId",
          pathParams: [
            {
              name: "productId",
              description: "Product id",
              schema: {
                type: "number",
              },
            },
          ],
          methodResponses: [
            {
              statusCode: "200",
              responseModels: {
                "application/json": "Product",
              },
            },
          ],
        },
      },
    },
  ],
};
