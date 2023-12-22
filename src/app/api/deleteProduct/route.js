 
import ProductModal from "app/DBconfig/models/product";
import { connectMongoDB } from "app/DBconfig/mongoDB";
import { NextResponse } from "next/server";
const cloudinary = require("cloudinary").v2;



cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});



export async function DELETE(request) {
  // 1- Receive data from Front-end
  console.log("oooooooooooooooooooooooooooooooooooooooooooooo")
  const objFromFrontEnd = await request.json();
  console.log(objFromFrontEnd);

  // 2- connect to DB
  await connectMongoDB();

 
  // 4- Try to Store obj to DB
  await ProductModal.deleteOne({
    _id: objFromFrontEnd.productId
  });


  await cloudinary.uploader.destroy(objFromFrontEnd.imgPublicId);

  // 5- Go back to frontend
  return NextResponse.json({});
}
