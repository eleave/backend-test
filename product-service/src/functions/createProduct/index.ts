import { handlerPath } from "@libs/handler-resolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.createProductHandler`,
  events: [
    {
      http: {
        method: "post",
        path: "products",
        cors: true,
        documentation: {
          description: "Create a new product",
          methodResponses: [
            {
              statusCode: "201",
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
