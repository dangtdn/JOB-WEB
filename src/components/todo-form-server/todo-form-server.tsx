import { createPostAction } from "@/serverActions/_posts";
import { createUserAction } from "@/serverActions/_users";

export default function TodoForm() {
  async function action(data: FormData) {
    "use server";

    const title = data.get("name");
    const description = data.get("location");
    // if (!title || typeof title !== "string") {
    //   return;
    // }
    // if (!description || typeof description !== "string") {
    //   return;
    // }

    // Invoke server action to add new todo
    await createUserAction(
      { username: "title1", password: "password", email: undefined },
      "/"
    );
  }

  return (
    <form
      action={action}
      key={Math.random()}
      className="flex items-center space-x-2 mb-4"
    >
      {/* <input
        type="text"
        name="name"
        className="border rounded px-2 py-1 flex-1"
        placeholder="title..."
      />
      <input
        type="text"
        name="location"
        className="border rounded px-2 py-1 flex-1"
        placeholder="description..."
      /> */}
      <button className="px-4 py-1 text-white rounded bg-green-500">Add</button>
    </form>
  );
}
