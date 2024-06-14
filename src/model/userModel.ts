import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide username"],
    unique: true,
  },
  firstname: {
    type: String,
    required: [true, "Please provide first name"],
    unique: true,
  },
  lastname: {
    type: String,
    required: [true, "Please provide last name"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide passward"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswardToken: String,
  forgotPasswardTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const users = mongoose.models.users || mongoose.model("users", userSchema);

export default users;