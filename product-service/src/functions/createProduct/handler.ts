import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { Client } from "pg";
import dbConfig from "@libs/db/config";

const createProduct = async (event) => {
  const client = new Client(dbConfig);
  const { name, description, price, count } = event.body;

  try {
    await client.connect();
    const result = await client.query(`
      INSERT INTO products (name, description, price)
      VALUES('${name}', '${description}', ${price})
      RETURNING id;
    `);

    const id = result.rows[0].id;
    await client.query(`
        INSERT INTO stocks(product_id, count)
        VALUES('${id}', ${count});
    `);

    return formatJSONResponse(
      {
        id,
        name,
        description,
        price,
        count,
      },
      201
    );
  } catch (error) {
    console.error(error);
    return error;
  } finally {
    await client.end();
  }
};

export const createProductHandler = middyfy(createProduct);
