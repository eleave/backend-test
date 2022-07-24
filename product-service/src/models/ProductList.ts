export default {
  name: "ProductList",
  description: "List of Products",
  contentType: "application/json",
  schema: {
    type: "array",
    items: {
      $ref: "{{model: Product}}",
    },
  },
};
