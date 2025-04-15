import React from "react";
import { useLocation } from "react-router-dom";

const BlogDetails = () => {
  const { state } = useLocation();
  const blog = state?.blog;

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
    <div className="py-12 md:px-20 pt-[100px] pb-[170px] md:pt-[100px] md:pb-[200px]">
      <div className="max-w-7xl mx-auto px-4 text-white">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h1>
        <p className="text-gray-600 mb-4">{blog.date}</p>
        <div className="overflow-hidden rounded-2xl">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full md:h-[500px] object-cover"
          />
        </div>
        <p className="text-gray-800">{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
