import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connecton = mongoose.connection;
    connecton.on("connected", () => {
      console.log("MongoDB connected succesfullly");
    });
    connecton.on("error", (err) => {
      console.log(
        "MogoDB connection error , please check MongoDB is running" + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("something gone wrong!");
    console.log(error);
  }
}