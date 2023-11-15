import { PostClass } from "@/models/Post";
import React from "react";

interface BlogItemProps {
  post: PostClass;
  key: string;
  index?: number;
}

const BlogItem: React.FC<BlogItemProps> = ({ post, key, index = 0 }) => {
  return (
    <div
      key={key}
      className="single-blog !p-5 border-gray border border-solid transition-all rounded-md group hover:border-themePrimary"
    >
      <div className="img mb-4 overflow-hidden rounded-md">
        <a href="/blog/single-blog">
          <div style={{ marginBottom: "-7px" }}>
            <span
              style={{
                boxSizing: "border-box",
                display: "inline-block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                position: "relative",
                maxWidth: "100%",
              }}
            >
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  maxWidth: "100%",
                }}
              >
                <img
                  alt=""
                  aria-hidden="true"
                  src={`https://picsum.photos/600/400?random=${index}`}
                  style={{
                    display: "block",
                    maxWidth: "100%",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                  }}
                />
              </span>
            </span>
          </div>
        </a>
      </div>
      <p className="text-grayLight text-xss font-normal mb-2">17 July 2022</p>
      <a
        className="text-arsenic hover:text-themePrimary transition-all duration-300 ease-in-out text-lg2 font-bold leading-6 mb-3 block"
        href="/blog/single-blog"
      >
        {post.title}
      </a>
      <div className="mb-6">
        <p className="text-xs text-deep font-normal leading-6">
          {post.description}
        </p>
      </div>
      <div className="blog-btn">
        <a
          className="inline-flex gap-3 items-center py-2.5 px-6 bg-light rounded-md group-hover:!bg-themePrimary leading-4 text-deep transition-all text-xxs group-hover:!text-white"
          href="/blog/single-blog"
        >
          Read More
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-lg"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1={5} y1={12} x2={19} y2={12} />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BlogItem;
