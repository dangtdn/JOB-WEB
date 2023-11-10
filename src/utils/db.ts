import mongoose from "mongoose";

const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO ?? "", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo connection successful!");
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
