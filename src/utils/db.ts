import mongoose from "mongoose";

const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL ?? "");
    console.log("Mongo connection successful!");
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
