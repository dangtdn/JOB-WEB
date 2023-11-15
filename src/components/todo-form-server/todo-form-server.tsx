import { createPostAction } from "@/serverActions/_posts";

export default function TodoForm() {
  async function action(data: FormData) {
    "use server";

    const title = data.get("title");
    const description = data.get("description");
    if (!title || typeof title !== "string") {
      return;
    }
    if (!description || typeof description !== "string") {
      return;
    }

    // Invoke server action to add new todo
    await createPostAction({ title, description }, "/");
  }

  return (
    <form
      action={action}
      key={Math.random()}
      className="flex items-center space-x-2 mb-4"
    >
      <input
        type="text"
        name="title"
        className="border rounded px-2 py-1 flex-1"
        placeholder="title..."
      />
      <input
        type="text"
        name="description"
        className="border rounded px-2 py-1 flex-1"
        placeholder="description..."
      />
      <button className="px-4 py-1 text-white rounded bg-green-500">Add</button>
    </form>
  );
}
