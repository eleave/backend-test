import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { Client } from "pg";
import dbConfig from "@libs/db/config";

const getProductList = async () => {
  const client = new Client(dbConfig);

  try {
    await client.connect();
    const result = await client.query(`
      SELECT id, name, description, price, count FROM products
      LEFT JOIN stocks ON products.id = stocks.product_id
    `);

    return formatJSONResponse(result.rows);
  } catch (error) {
    console.error(error);
    return error;
  } finally {
    await client.end();
  }
};

export const getProductListHandler = middyfy(getProductList);
