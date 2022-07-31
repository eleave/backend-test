import type { AWS } from "@serverless/typescript";

import getProductList from "@functions/getProductList";
import getProductById from "@functions/getProductById";
import createProduct from "@functions/createProduct";

import Product from "@models/Product";
import ProductList from "@models/ProductList";

const serverlessConfiguration: AWS = {
  service: "product-service",
  frameworkVersion: "3",
  plugins: [
    "serverless-esbuild",
    "@martinsson/serverless-openapi-documentation",
  ],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    stage: "dev",
    region: "eu-west-1",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
    },
  },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk", "pg-native"],
      target: "node14",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
    documentation: {
      api: {
        info: {
          version: "1",
          title: "Product Service API",
          description: "Product Service API",
        },
      },
      models: [Product, ProductList],
    },
  },
  functions: {
    getProductList,
    getProductById,
    createProduct,
  },
  package: { individually: true },
};

module.exports = serverlessConfiguration;
