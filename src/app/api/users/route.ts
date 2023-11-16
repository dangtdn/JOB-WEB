import connectDB from "@/lib/database/connect-db";
import { createUser, getUsers } from "@/lib/database/users-db";
import { createErrorResponse } from "@/utils/utils";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    await connectDB();

    const page_str = request.nextUrl.searchParams.get("page");
    const limit_str = request.nextUrl.searchParams.get("limit");

    const page = page_str ? parseInt(page_str, 10) : 1;
    const limit = limit_str ? parseInt(limit_str, 10) : 10;

    const { users, results, error } = await getUsers({ page, limit });

    if (error) {
      throw error;
    }

    let json_response = {
      status: "success",
      results,
      users,
    };
    return NextResponse.json(json_response, { status: 200 });
  } catch (error: any) {
    return createErrorResponse(error.message, 500);
  }
};

export const POST = async (request: Request) => {
  try {
    await connectDB();

    const body = await request.json();

    if (!body.title) {
      return createErrorResponse("User must have a title", 400);
    }

    const { user, error } = await createUser(body);
    if (error) {
      throw error;
    }

    let json_response = {
      status: "success",
      data: {
        user,
      },
    };
    return new NextResponse(JSON.stringify(json_response), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    if (error.code === 11000) {
      return createErrorResponse("User with title already exists", 409);
    }

    return createErrorResponse(error.message, 500);
  }
};
