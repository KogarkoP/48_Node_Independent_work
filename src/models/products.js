import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  description: { type: String, required: true },
});

export default mongoose.model("mobile_phones", productSchema);
