import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";

import PRODUCTS from "../../data/products.json";

const getProductList = async () => {
  return formatJSONResponse(PRODUCTS);
};

export const getProductListHandler = middyfy(getProductList);
