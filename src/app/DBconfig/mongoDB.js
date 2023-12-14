const mongoose = require("mongoose");
 
export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connected to MongoDB");
  } catch (error) {
    console.log("ERROR WITH CONNECTING  MongoDB", error);
  }
};


