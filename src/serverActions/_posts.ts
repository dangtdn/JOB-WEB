"use server";

import { createPost, deletePost, updatePost } from "@/lib/database/posts-db";
import { revalidatePath } from "next/cache";

/**
 * Server Action: Create a new todo.
 */
export async function createPostAction(
  req: { title: string; description: string },
  path: string
) {
  await createPost(req);
  revalidatePath(path);
}

/**
 * Server Action: Update an existing todo.
 */
export async function updatePostAction(
  id: string,
  update: { tilte?: string; description?: boolean },
  path: string
) {
  await updatePost(id, update);
  revalidatePath(path);
}

/**
 * Server Action: Delete a todo.
 */
export async function deletePostAction({
  id,
  path,
}: {
  id: string;
  path: string;
}) {
  await deletePost(id);
  revalidatePath(path);
}
