import React, { useContext, useEffect, useState } from "react";
// import Navbar from "./Navbar";
import blogContext from "../context/blogs/blogContext";
import { Link } from "react-router-dom";
import "./styles/landing.css";
import { motion } from "framer-motion";
import Loader from "./Loader";
import Notification from "./Notification";
const LandingPage = () => {
  const context = useContext(blogContext);
  const { blogs, fetchAllBlogs, alert } = context;
  const [loading, setloading] = useState(false);
  // const [notificationVisible, setnotificationVisible] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      fetchAllBlogs().then(() => {
        console.table(blogs)
        setloading(false);
      }, 500);
    });
    document.title = "BloggerStop - Home";
  }, []);

  return (
    <>
      {alert.state && (
        <Notification message={alert.message} type={alert.type} />
      )}
      <div className="bg_img"></div>
      <div className="bg"></div>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mainHeading"
        >
          <h4 className="trend">Share your Blogs to the World</h4>
          <h1>
            For The Bloggers <br />
            By The Bloggers
          </h1>
          {localStorage.getItem("auth-Token") ? (
            <Link className="blogBtn " to={"/BlogWritingPage"}>
              Write Your Blog Today
            </Link>
          ) : (
            <Link className="blogBtn " to={"/Login"}>
              Write Your Blog Today
            </Link>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="blogItems"
        >
          <h4 className="trending">Trending 🔥</h4>
          <div className="allBlogs">
            {loading ? (
              <Loader />
            ) : (
              <div className="blogsBox">
                {blogs.map((blog) => {
                  if (blog.privacy === "public") {
                    return (
                      <div key={blog._id} className="blogElem">
                        <div className="heading">
                          <h2>
                            {blog.title.length > 10
                              ? blog.title.substr(0, 10) + "..."
                              : blog.title}
                            |
                          </h2>
                          <h4 className="genre">
                            {blog.genre.length > 10
                              ? blog.genre.substr(0, 10) + "..."
                              : blog.genre}
                          </h4>
                        </div>
                        <span>
                          {blog.description.length > 30
                            ? blog.description.substr(0, 30) + "..."
                            : blog.description}
                        </span>
                        <div className="seperation">
                          <h4>-{blog.author}</h4>
                          <Link
                            className="readBtn"
                            to={`/BlogPage/${blog._id}`}
                          >
                            Read Full Blog
                          </Link>
                        </div>
                        {/* {console.log(blog.author)} */}
                        <hr />
                      </div>
                    );
                  }
                })}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default LandingPage;
