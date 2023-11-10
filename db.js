import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL ?? "");
    console.log("Mongo connection successful!");
  } catch (error) {
    throw new Error("Error in coonecting to mongodb.");
  }
};

export default connect;
