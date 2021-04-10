import React from "react";
import "./Blog.css";
import doctor1 from "../../../images/Ellipse 1.png";
import doctor2 from "../../../images/Ellipse 2.png";
import doctor3 from "../../../images/Ellipse 3.png";
import BlogInfo from "../BlogInfo/BlogInfo";

const blogInfo = [
  {
    id: 1,
    img: doctor1,
    name: "Dr. Rashed Kabir",
    date: "23 April",
    headline: "Check at least a doctor i a year fro your teeth",
    describtion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, iste laudantium. Minima?",
  },
  {
    id: 2,
    img: doctor2,
    name: "Dr. Caudi",
    date: "01 February",
    headline: "Check at least a doctor i a year fro your teeth",
    describtion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, iste laudantium. Minima?",
  },
  {
    id: 3,
    img: doctor3,
    name: "Dr. Jhon Methel",
    date: "30 January",
    headline: "Check at least a doctor i a year fro your teeth",
    describtion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, iste laudantium. Minima?",
  },
];

const Blog = () => {
  return (
    <div className="container blog-container">
      <div className="blog-header text-center">
        <h5 style={{ color: "#16D2C1" }}>OUR BLOG</h5>
        <h2 style={{ color: "#474f62" }}>From Our Blog News</h2>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
        {blogInfo.map((blog) => (
          <BlogInfo key={blog.key} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
