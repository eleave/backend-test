import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { Client } from "pg";
import dbConfig from "@libs/db/config";

const getProductById = async (event) => {
  const client = new Client(dbConfig);
  const productId = event.pathParameters.productId;

  try {
    await client.connect();
    const result = await client.query(`
      SELECT id, name, description, price, count FROM products
      LEFT JOIN stocks ON products.id = stocks.product_id
      WHERE id = '${productId}'
    `);

    return formatJSONResponse(result.rows[0]);
  } catch (error) {
    console.error(error);
    return error;
  } finally {
    await client.end();
  }
};

export const getProductByIdHandler = middyfy(getProductById);
