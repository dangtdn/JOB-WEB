import React from "react";
import BlogItem from "../BlogItem/BlogItem";
import { getPosts } from "@/lib/database/posts-db";

const Blogs = async () => {
  const { posts, results } = await getPosts();

  const renderBlogs = () =>
    posts?.map((post, index) => <BlogItem post={post} key={post.id} index={index} />);

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-themePrimary font-bold text-xs leading-none mb-1">
            Our Blog
          </p>
          <h2 className="text-xl font-bold text-black">
            See How You Can Up Your Career Status
          </h2>
        </div>
        <div className="grid gap-4 xl:gap-6 xl:grid-cols-3 md:grid-cols-2">
          {renderBlogs()}
        </div>
        <div className="text-center mt-14">
          <a
            className="text-white text-xs font-normal transition-all bg-arsenic px-6 py-2.5 rounded-md hover:bg-themePrimary"
            href="/career-advice"
          >
            See All Blog
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
