import mongoose, { ConnectOptions } from "mongoose";

const connect = async () => {
  const options = {
    useNewUrlParser: true,
  };
  try {
    await mongoose.connect(process.env.MONGO_URL ?? "", options);
    console.log("Mongo connection successful!");
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;

// mongodb.js

// import { MongoClient } from "mongodb";

// const uri = process.env.MONGO_URL;
// const options = {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// };

// let client;
// let clientPromise;

// if (!process.env.MONGODB_URI) {
//   throw new Error("Add Mongo URI to .env.local");
// }

// if (process.env.NODE_ENV === "development") {
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// export default clientPromise;
// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGO_URL;

// if (!MONGODB_URI) {
//   throw new Error(
//     "Please define the MONGODB_URI environment variable inside .env.local"
//   );
// }

// let cachedConnection = global.mongoose;

// if (!cachedConnection) {
//   cachedConnection = global.mongoose = {};
// }

// if (!cachedConnection.conn) {
//   const opts = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   };

//   cachedConnection.conn = mongoose.createConnection(MONGODB_URI, opts);

//   cachedConnection.conn
//     .then((db) => {
//       console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
//     })
//     .catch((err) => {
//       console.error("MongoDB connection error:", err);
//     });
// }

// export default cachedConnection.conn;
