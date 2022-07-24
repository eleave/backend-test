export default {
  name: "Product",
  description: "Product model",
  contentType: "application/json",
  schema: {
    type: "object",
    properties: {
      id: {
        type: "string",
        description: "Product identifier",
      },
      name: {
        type: "string",
        description: "Product name",
      },
      description: {
        type: "string",
        description: "Product description",
      },
      price: {
        type: "number",
        description: "Product price",
      },
      imageUrl: {
        type: "string",
        description: "Product imageUrl",
      },
    },
  },
};
