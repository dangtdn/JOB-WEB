import Blogs from "@/components/Blogs/Blogs";
import Carousel from "@/components/Carousel/Carousel";
import Footer from "@/components/Footer/Footer";
import JobCard from "@/components/JobCard/JobCard";
import Navbar from "@/components/Navbar/Navbar";
import Reviews from "@/components/Reviews/Reviews";
import { getTodos } from "@/lib/database/todo-db";
import Image from "next/image";
import TodoFormServerComponent from "@/components/todo-form-server/todo-form-server";
import TodoItemServerComponent from "@/components/todo-item-server/todo-item-server";
import { getPosts } from "@/lib/database/posts-db";

const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between pt-12">
        <Carousel />
        {/* <Reviews /> */}
        <Blogs />
      </main>
      <Footer />
    </div>
  );
  // const { posts, results } = await getPosts();
  // // const { todos, results } = await getTodos();

  // return (
  //   <div className="container mx-auto max-w-md p-4">
  //     <TodoFormServerComponent />
  //     <h1 className="text-2xl font-bold mb-4">Posts List</h1>
  //     {results === 0 ? (
  //       <p className="text-center">No Posts Found</p>
  //     ) : (
  //       posts?.map((post) => (
  //         <TodoItemServerComponent key={post.id} post={post} />
  //       ))
  //     )}
  //   </div>
  // );
};

export default Home;
