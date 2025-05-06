import React from "react";
import { useNavigate } from "react-router-dom";
import testImage from "../assets/test4.png";
import testImage2 from "../assets/test2.png";
import testImage3 from "../assets/test3.png";

const blogs = [
  {
    id: "1",
    title: "Finding Love in a Digital World",
    image: testImage,
    excerpt:
      "Learn how technology is bridging distances and connecting hearts in the most beautiful ways.",
    date: "April 2025",
    content: "Full content of 'Finding Love in a Digital World'.",
  },
  {
    id: "2",
    title: "Top 5 Tips for Meaningful Connections",
    image: testImage2,
    excerpt:
      "Discover tips that help spark deep, lasting connections while staying true to yourself.",
    date: "March 2025",
    content: "Full content of 'Top 5 Tips for Meaningful Connections'.",
  },
  {
    id: "3",
    title: "How Elite Services Add Value",
    image: testImage3,
    excerpt:
      "Understand why personalized matchmaking services are worth the investment for lasting love.",
    date: "February 2025",
    content: "Full content of 'How Elite Services Add Value'.",
  },
];

const BlogSection = () => {
  const navigate = useNavigate();

  const handleReadMore = (blog) => {
    navigate(`/blog/${blog.id}`, { state: { blog } });
  };

  return (
    <section className="pt-12 px-4 md:px-6 lg:px-8 bg-white py-15">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
        <h2 className="text-5xl text-amber-500  font-bold max-md:text-4xl max-sm:text-3xl font-['inter']">
            Latest From Our Blog
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            Advice, stories, and insights from our team and happy couples.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-sm:gap-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-50   rounded-2xl  p-1 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-56 md:h-64 overflow-hidden group">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded-2xl object-top group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-400 mb-2">{blog.date}</p>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {blog.excerpt}
                </p>
                <button
                  onClick={() => handleReadMore(blog)}
                  className="mt-3 relative  group text-red-800 hover:text-white  border-black py-1.5 px-4  transition cursor-pointer duration-100"
                  style={{ textDecorationColor: "#A62C2C" }}
                >
                 <span className="relative z-10 "> Read More</span>
                  <div className="absolute left-0 top-0 w-0 h-full group-hover:w-full transition-all bg-red-700 duration-300"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
