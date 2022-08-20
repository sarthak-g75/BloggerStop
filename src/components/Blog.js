import React from "react";
// import {  useLocation, useNavigate } from "react-router-dom";
// import blogContext from "../context/blogs/blogContext";
import BlogCard from "./BlogCard";

// import authContext from "../context/blogs/authContext";

const Blog = ({ blogs }) => {
  // const history = useNavigate();
  // const location = useLocation();
  // const context = useContext(blogContext);
  // const { deleteBlog } = context;

  // const dltBlog = (e) => {
  //   deleteBlog(e._id).then((res) => {
  //     if (res.success) {
  //       history("/");
  //     }
  //   });
  // };
  // console.log(blogs);
  // let initialVal =.2;
  return (
    <>
      <div className="box">
        {/* <BlogCard/> */}
        {blogs.map((blog) => {
          return (
            <>
              <BlogCard element={blog} />
              {/* <div key={blog._id}>
              <h2>{blog.title}</h2>
              <h2>{blog.author}</h2>
              <Link to={`/BlogPage/${blog._id}`}> Read Blog</Link>

              {location.pathname.includes("MyBlogs") ? (
                <div>
                  <Link to={`/EditBlog/${blog._id}`}>Edit</Link>
                  <button
                    onClick={() => {
                      dltBlog(blog);
                    }}
                  >
                    Delete
                  </button>
                </div>
              ) : (
                <></>
              )}
            </div> */}
            </>
          );
        })}
      </div>
    </>
  );
};

export default Blog;
