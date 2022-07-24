import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";

import PRODUCTS from "../../data/products.json";

const getProductById = async (event) => {
  const product =
    PRODUCTS.find(
      (product) => product.id === Number(event.pathParameters.productId)
    ) || null;

  return formatJSONResponse(product);
};

export const getProductByIdHandler = middyfy(getProductById);
