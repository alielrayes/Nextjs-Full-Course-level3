import ProductModal from "app/DBconfig/models/product";
import UserModal from "app/DBconfig/models/user";
import { connectMongoDB } from "app/DBconfig/mongoDB";
import { NextResponse } from "next/server";





export async function GET(request) {
  await connectMongoDB();
  const id = request.nextUrl.searchParams.get("id")


  const objData = await ProductModal.findOne({
    _id: id
  });
  console.log("***********************************************")
  console.log(objData);


    // 5- Go back to frontend
    return NextResponse.json(objData);
}
