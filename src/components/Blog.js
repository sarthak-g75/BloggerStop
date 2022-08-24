import React from "react";
// import {  useLocation, useNavigate } from "react-router-dom";
// import blogContext from "../context/blogs/blogContext";
import BlogCard from "./BlogCard";

// import authContext from "../context/blogs/authContext";

const Blog = ({ blogs }) => {

  return (
    <>
      <div className="box">
        {/* <BlogCard/> */}
        {blogs.map((blog) => {
          return (
            <>
              <BlogCard element={blog} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Blog;
