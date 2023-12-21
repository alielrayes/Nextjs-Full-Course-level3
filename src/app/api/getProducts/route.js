import ProductModal from "app/DBconfig/models/product";
import UserModal from "app/DBconfig/models/user";
import { connectMongoDB } from "app/DBconfig/mongoDB";
import { NextResponse } from "next/server";





export async function GET(request) {
  await connectMongoDB();
  const arrData = await ProductModal.find();

    // 5- Go back to frontend
    return NextResponse.json(arrData);
}
