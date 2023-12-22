import UserModal from "app/DBconfig/models/user";
import { connectMongoDB } from "app/DBconfig/mongoDB";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import ProductModal from "app/DBconfig/models/product";
import { uploadStream } from "helper/uploadImgCloudinary";

export async function POST(request) {
  // 1- Receive data from Front-end
  const objFromFrontEnd = await request.formData();
  const productImg = objFromFrontEnd.get("productImg");
  console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm")
 

  //2- Convert img into buffer & upload img to cloudinary
  const bytes = await productImg.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const uploadedImg = await uploadStream(buffer);
  console.log(uploadedImg)
 
  const imgURL = uploadedImg.url;
 const publicId = uploadedImg.public_id


  // 3- connect to DB
  await connectMongoDB();

  // 4- Try to Store obj to DB
  await ProductModal.create({
    productImg: imgURL,
    title: objFromFrontEnd.get("title"),
    price: objFromFrontEnd.get("price"),
    description: objFromFrontEnd.get("description"),
    imgPublicId: publicId
  });
  console.log("==================  DONE =================");
  // 5- Go back to frontend
  return NextResponse.json({ message: "product added successfully" });
}
