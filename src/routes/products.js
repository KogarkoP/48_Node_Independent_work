import express from "express";
import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_ID,
  INSERT_PRODUCT,
  UPDATE_PRODUCT_BY_ID,
  DELETE_PRODUCT_BY_ID,
} from "../controllers/products.js";

const router = express.Router();

router.get("/products", GET_ALL_PRODUCTS);
router.get("/products/:id", GET_PRODUCT_BY_ID);
router.post("/products", INSERT_PRODUCT);
router.put("/products/:id", UPDATE_PRODUCT_BY_ID);
router.delete("/products/:id", DELETE_PRODUCT_BY_ID);

export default router;
