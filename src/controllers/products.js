import { v4 as uuidv4 } from "uuid";
import productModel from "../models/products.js";

export const GET_ALL_PRODUCTS = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).json({
      movies: products,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Houston we have a problem!!!!",
    });
  }
};

export const GET_PRODUCT_BY_ID = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productModel.findOne({ id: id });

    if (!product) {
      return res.status(404).json({
        message: "Product does not exist",
      });
    }

    return res.status(200).json({
      message: "Here is your product",
      product: product,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Houston we have a problem!!!!",
    });
  }
};

export const INSERT_PRODUCT = async (req, res) => {
  try {
    const product = {
      id: uuidv4(),
      title: req.body.title,
      price: req.body.price,
      rating: req.body.rating,
      description: req.body.description,
    };

    const response = new productModel(product);

    const data = await response.save();

    res.status(201).json({
      message: "Product was added",
      product: data,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Houston we have a problem!!!!",
    });
  }
};

export const UPDATE_PRODUCT_BY_ID = async (req, res) => {
  try {
    const id = req.params.id;

    const product = await productModel.findOneAndUpdate(
      { id: id },
      { ...req.body },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({
        messgage: `Product with ID: ${id} does not exist`,
      });
    }

    return res.status(200).json({
      messgage: "Product was updated",
      product: product,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Houston we have a problem!!!!",
    });
  }
};

export const DELETE_PRODUCT_BY_ID = async (req, res) => {
  try {
    const id = req.params.id;

    const product = await productModel.findOneAndDelete({ id: id });

    if (!product) {
      return res.status(404).json({
        message: `Product with ID: ${id} does not exist`,
      });
    }

    return res.status(200).json({
      message: "Product was deleted",
      product,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Houston we have a problem!!!!",
    });
  }
};
