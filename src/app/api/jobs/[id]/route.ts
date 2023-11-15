import connectDB from "@/lib/database/connect-db";
import { deleteJob, getJob, updateJob } from "@/lib/database/jobs-db";
import { createErrorResponse } from "@/utils/utils";
import { NextResponse } from "next/server";

export const GET = async (
  _request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await connectDB();

    const id = params.id;
    const { job, error } = await getJob(id);

    if (error) {
      throw error;
    }

    let json_response = {
      status: "success",
      data: {
        job,
      },
    };
    return NextResponse.json(json_response);
  } catch (error: any) {
    if (typeof error === "string" && error.includes("Job not found")) {
      return createErrorResponse("Job not found", 404);
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

    const { job, error } = await updateJob(id, body);

    if (error) {
      throw error;
    }

    let json_response = {
      status: "success",
      data: {
        job,
      },
    };
    return NextResponse.json(json_response);
  } catch (error: any) {
    if (typeof error === "string" && error.includes("Job not found")) {
      return createErrorResponse("Job not found", 404);
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
    const { error } = await deleteJob(id);

    if (error) {
      throw error;
    }

    return new NextResponse(null, { status: 204 });
  } catch (error: any) {
    if (typeof error === "string" && error.includes("Job not found")) {
      return createErrorResponse("Job not found", 404);
    }

    return createErrorResponse(error.message, 500);
  }
};
