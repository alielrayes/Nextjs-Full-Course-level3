 
import ProductModal from "app/DBconfig/models/product";
import { connectMongoDB } from "app/DBconfig/mongoDB";
import { NextResponse } from "next/server";







export async function PUT(request) {
  // 1- Receive data from Front-end
  console.log("kkkkkkkkkkkkkkkkkkkkkkkkk")
  const objFromFrontEnd = await request.json();
  console.log(objFromFrontEnd);

  // 2- connect to DB
  await connectMongoDB();

 
  // 4- Try to Store obj to DB
  await ProductModal.updateOne({_id: objFromFrontEnd.productId}, {
    title: objFromFrontEnd.title,
    price: objFromFrontEnd.price,
    description: objFromFrontEnd.description,
  });


 

  // 5- Go back to frontend
  return NextResponse.json({});
}
