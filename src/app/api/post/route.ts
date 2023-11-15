import connectDB from "@/lib/database/connect-db";
import { createPost, getPosts } from "@/lib/database/posts-db";
import { createErrorResponse } from "@/utils/utils";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    await connectDB();

    const page_str = request.nextUrl.searchParams.get("page");
    const limit_str = request.nextUrl.searchParams.get("limit");

    const page = page_str ? parseInt(page_str, 10) : 1;
    const limit = limit_str ? parseInt(limit_str, 10) : 10;

    const { posts, results, error } = await getPosts({ page, limit });

    if (error) {
      throw error;
    }

    let json_response = {
      status: "success",
      results,
      posts,
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
      return createErrorResponse("Post must have a title", 400);
    }

    const { post, error } = await createPost(body);
    if (error) {
      throw error;
    }

    let json_response = {
      status: "success",
      data: {
        post,
      },
    };
    return new NextResponse(JSON.stringify(json_response), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    if (error.code === 11000) {
      return createErrorResponse("Post with title already exists", 409);
    }

    return createErrorResponse(error.message, 500);
  }
};
