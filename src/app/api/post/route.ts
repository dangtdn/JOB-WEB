import { NextResponse } from "next/server";
import connect from "../../../../db";

export const GET = async () => {
  try {
    await connect();
  } catch (error) {
    return new NextResponse("Error in fetching posts: " + error, {
      status: 500,
    });
  }
};
