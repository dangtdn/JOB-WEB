import { Job, JobClass } from "@/models/Job";
import connectDB from "./connect-db";
import { stringToObjectId } from "@/utils/utils";

interface JobFilter {
  page?: number;
  limit?: number;
}

export async function getJobs(filter: JobFilter = {}) {
  try {
    await connectDB();

    const page = filter.page ?? 1;
    const limit = filter.limit ?? 10;
    const skip = (page - 1) * limit;

    const jobs = await Job.find().skip(skip).limit(limit).lean().exec();

    const results = jobs.length;

    return {
      jobs: jobs,
      page,
      limit,
      results,
    };
  } catch (error) {
    return { error };
  }
}

export async function createJob(req: JobClass) {
  try {
    await connectDB();

    const job = await Job.create(req);

    return {
      job,
    };
  } catch (error) {
    return { error };
  }
}

export async function getJob(id: string) {
  try {
    await connectDB();

    const parsedId = stringToObjectId(id);

    if (!parsedId) {
      return { error: "Job not found" };
    }

    const job = await Job.findById(parsedId).lean().exec();
    if (job) {
      return {
        job,
      };
    } else {
      return { error: "Job not found" };
    }
  } catch (error) {
    return { error };
  }
}

export async function updateJob(id: string, data: JobClass) {
  try {
    await connectDB();

    const parsedId = stringToObjectId(id);

    if (!parsedId) {
      return { error: "Job not found" };
    }

    const job = await Job.findByIdAndUpdate(parsedId, data, { new: true })
      .lean()
      .exec();

    if (job) {
      return {
        job,
      };
    } else {
      return { error: "Job not found" };
    }
  } catch (error) {
    return { error };
  }
}

export async function deleteJob(id: string) {
  try {
    await connectDB();

    const parsedId = stringToObjectId(id);

    if (!parsedId) {
      return { error: "Job not found" };
    }

    const job = await Job.findByIdAndDelete(parsedId).exec();

    if (job) {
      return {};
    } else {
      return { error: "Job not found" };
    }
  } catch (error) {
    return { error };
  }
}
