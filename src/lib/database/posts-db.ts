import { Post } from "@/models/Post";
import connectDB from "./connect-db";
import { stringToObjectId } from "@/utils/utils";

interface PostFilter {
  page?: number;
  limit?: number;
}

export async function getPosts(filter: PostFilter = {}) {
  try {
    await connectDB();

    const page = filter.page ?? 1;
    const limit = filter.limit ?? 10;
    const skip = (page - 1) * limit;

    const posts = await Post.find().skip(skip).limit(limit).lean().exec();

    const results = posts.length;

    return {
      posts: posts,
      page,
      limit,
      results,
    };
  } catch (error) {
    return { error };
  }
}

export async function createPost(req: { title: string; description: string }) {
  try {
    await connectDB();

    const post = await Post.create(req);

    return {
      post,
    };
  } catch (error) {
    return { error };
  }
}

export async function getPost(id: string) {
  try {
    await connectDB();

    const parsedId = stringToObjectId(id);

    if (!parsedId) {
      return { error: "Post not found" };
    }

    const post = await Post.findById(parsedId).lean().exec();
    if (post) {
      return {
        post,
      };
    } else {
      return { error: "Post not found" };
    }
  } catch (error) {
    return { error };
  }
}

export async function updatePost(
  id: string,
  { title, description }: { title?: string; description?: boolean }
) {
  try {
    await connectDB();

    const parsedId = stringToObjectId(id);

    if (!parsedId) {
      return { error: "Post not found" };
    }

    const post = await Post.findByIdAndUpdate(
      parsedId,
      { title, description },
      { new: true }
    )
      .lean()
      .exec();

    if (post) {
      return {
        post,
      };
    } else {
      return { error: "Post not found" };
    }
  } catch (error) {
    return { error };
  }
}

export async function deletePost(id: string) {
  try {
    await connectDB();

    const parsedId = stringToObjectId(id);

    if (!parsedId) {
      return { error: "Post not found" };
    }

    const post = await Post.findByIdAndDelete(parsedId).exec();

    if (post) {
      return {};
    } else {
      return { error: "Post not found" };
    }
  } catch (error) {
    return { error };
  }
}
