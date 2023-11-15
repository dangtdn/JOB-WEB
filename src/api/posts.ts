import { getPosts } from "@/lib/database/posts-db";

export const getPostsFromServer = async () => {
  const res = await getPosts();

  return res;
};
