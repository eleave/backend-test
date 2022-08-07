import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";

import { S3 } from "aws-sdk";
const BUCKET = "import-service-backend-test";

const importProductsFile = async (event) => {
  const s3 = new S3({ region: "eu-west-1" });
  const fileName = event.queryStringParameters.name;
  const filePath = `uploaded/${fileName}`;

  const params = {
    Bucket: BUCKET,
    Key: filePath,
    Expires: 60,
    ContentType: "text/csv",
  };

  try {
    const url = await s3.getSignedUrlPromise("putObject", params);
    return formatJSONResponse(url);
  } catch (error) {
    return formatJSONResponse(error, 500);
  }
};

export const importProductsFileHandler = middyfy(importProductsFile);
