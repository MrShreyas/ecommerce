import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
 
  itemname: {
    type: String,
    unique: true,
  },
  itemdescription: {
    type: String,
    unique: true,
  },
  rating: {
    type: String,
    unique: true,
  },
  color: {
    type: String,
    unique: true,
  },
  price: {
    type: String,
  },
  
});

const items = mongoose.models.items || mongoose.model("items", itemSchema);

export default items;