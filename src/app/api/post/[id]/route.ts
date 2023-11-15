import connectDB from "@/lib/database/connect-db";
import { deletePost, getPost, updatePost } from "@/lib/database/posts-db";
import { createErrorResponse } from "@/utils/utils";
import { NextResponse } from "next/server";

export const GET = async (
  _request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await connectDB();

    const id = params.id;
    const { post, error } = await getPost(id);

    if (error) {
      throw error;
    }

    let json_response = {
      status: "success",
      data: {
        post,
      },
    };
    return NextResponse.json(json_response);
  } catch (error: any) {
    if (typeof error === "string" && error.includes("Post not found")) {
      return createErrorResponse("Post not found", 404);
    }

    return createErrorResponse(error.message, 500);
  }
};

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await connectDB();

    const id = params.id;
    let body = await request.json();

    const { post, error } = await updatePost(id, body);

    if (error) {
      throw error;
    }

    let json_response = {
      status: "success",
      data: {
        post,
      },
    };
    return NextResponse.json(json_response);
  } catch (error: any) {
    if (typeof error === "string" && error.includes("Post not found")) {
      return createErrorResponse("Post not found", 404);
    }

    return createErrorResponse(error.message, 500);
  }
};

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await connectDB();

    const id = params.id;
    const { error } = await deletePost(id);

    if (error) {
      throw error;
    }

    return new NextResponse(null, { status: 204 });
  } catch (error: any) {
    if (typeof error === "string" && error.includes("Post not found")) {
      return createErrorResponse("Post not found", 404);
    }

    return createErrorResponse(error.message, 500);
  }
};
