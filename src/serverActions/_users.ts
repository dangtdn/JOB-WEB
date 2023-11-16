"use server";

import { createUser, deleteUser, updateUser } from "@/lib/database/users-db";
import { revalidatePath } from "next/cache";

/**
 * Server Action: Create a new todo.
 */
export async function createUserAction(
  req: { username: string; password?: string; email?: string },
  path: string
) {
  await createUser(req);
  revalidatePath(path);
}

/**
 * Server Action: Update an existing todo.
 */
export async function updateUserAction(
  id: string,
  update: { username?: string; password?: string; email?: string },
  path: string
) {
  await updateUser(id, update);
  revalidatePath(path);
}

/**
 * Server Action: Delete a todo.
 */
export async function deleteUserAction({
  id,
  path,
}: {
  id: string;
  path: string;
}) {
  await deleteUser(id);
  revalidatePath(path);
}
