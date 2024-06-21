import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    items: [{
      product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'items' },
      quantity: Number
    }],
    created_at: { type: Date, default: Date.now },
  });

const cart = mongoose.models.cart || mongoose.model("cart", CartSchema);

export default cart;