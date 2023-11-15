import { deleteTodoAction, updateTodoAction } from "@/serverActions/_action";
import { TodoClass } from "@/models/Todo";
import CheckBox from "../checkbox/checkbox";
import { PostClass } from "@/models/Post";
import { deletePostAction } from "@/serverActions/_posts";

interface TodoItemProps {
  post: PostClass;
}

const TodoItem: React.FC<TodoItemProps> = ({ post }) => {
  return (
    <form className="flex items-center space-x-2 mb-2">
      {/* <button
        className={`px-2 py-1 flex-1 text-left `}
        formAction={async () => {
          "use server";
          await updateTodoAction(post.id, { completed: !post.completed }, "/");
        }}
      >
        {post.title}
      </button> */}
      <p>
        title: {post.title} - description: {post.description}
      </p>
      <div className="flex items-center">
        {/* <CheckBox post={post} /> */}
        <button
          className="px-2 py-1 ml-2 text-white rounded bg-red-500 "
          formAction={async () => {
            "use server";
            await deletePostAction({
              id: post.id,
              path: "/",
            });
          }}
        >
          Delete
        </button>
      </div>
    </form>
  );
};

export default TodoItem;
