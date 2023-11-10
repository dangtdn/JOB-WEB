import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (req: any, res: any) => {
  try {
    // Kết nối đến MongoDB
    await connect();

    // Logic xử lý cho route handler ở đây

    // Trả về một Response thành công
    return new NextResponse("successfully: ", {
      status: 200,
    });
  } catch (error) {
    // Xử lý lỗi kết nối MongoDB
    console.log("Mongo connection failed!", error);

    // Trả về một NextResponse với mã trạng thái 500
    return new NextResponse("Error in fetching data: " + error, {
      status: 500,
    });
  }
};
