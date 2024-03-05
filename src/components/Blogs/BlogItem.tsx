import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import ImageOpt from "../optimize/image";
import { Item } from "./Blogs";

const BlogItem = ({ data }: { data: Item }) => {
  return (
    <div className="single-blog !p-5 border-gray border border-solid transition-all rounded-md group hover:border-themePrimary">
      <div className="img mb-4 overflow-hidden rounded-md">
        {data && (
          <Link href={`/blogs/${data?.id}`}>
            <ImageOpt
              className="transition-all duration-300 group-hover:scale-125"
              src={data?.cover_image || "/assets/img/post/default.webp"}
              width={1000}
              height={650}
              alt={data?.cover_image}
            />
          </Link>
        )}
      </div>
      <p className="text-grayLight text-xss font-normal mb-2">{data?.date}</p>
      <Link
        href={`/blogs/${data?.id}`}
        className="text-arsenic hover:text-themePrimary transition-all duration-300 ease-in-out text-lg2 font-bold leading-6 mb-3 block"
      >
        {data?.title}
      </Link>
      <div className="mb-6">
        <p className="text-xs text-deep font-normal leading-6">
          {data?.excerpt}
        </p>
      </div>
      <div className="blog-btn">
        <Link
          href={`/blogs/${data?.id}`}
          className="inline-flex gap-3 items-center  py-2.5 px-6 bg-light rounded-md group-hover:!bg-themePrimary leading-4 text-deep transition-all text-xxs group-hover:!text-white"
        >
          Read More
          <FiArrowRight className="text-lg" />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
