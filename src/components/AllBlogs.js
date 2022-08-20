import React, { useContext, useEffect, useState } from "react";
import blogContext from "../context/blogs/blogContext";
import Blog from "./Blog";
import Pagination from "./Pagination";
import { useParams,Link } from "react-router-dom";
import Loader from "./Loader";
import { motion } from "framer-motion";

const AllBlogs = () => {
  const context = useContext(blogContext);
  const { blogs, fetchAllBlogs } = context;
  useEffect(() => {
    fetchAllBlogs();
    document.title = "BloggerStop - All Blogs"

    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);
  const { no } = useParams();
  // console.log(no);
  const [loading, setloading] = useState(true);
  // const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage] = useState(4);

  const indexOfLastBlog = no * postPerPage;
  const indexOfFirstBlog = indexOfLastBlog - postPerPage;
  const currentBlog = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {blogs.length >= 1? <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="allBlogs-bg"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="allBlogs-bg-img"
            ></motion.div>
            {/* <Pagination postPerPage={postPerPage} totalPosts={blogs.length} /> */}
            <Blog blogs={currentBlog} />
            <Pagination
              postPerPage={postPerPage}
              totalPosts={blogs.length}
              currentPage={no}
            />
          </div> :<div className="allBlogsPage">
          <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="allBlogs-bg"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="allBlogs-bg-img"
              ></motion.div>
              <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {" "}
                No Blogs Present
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Link className="blogBtn " to={"/BlogWritingPage"}>
                  Write Your Blog Today
                </Link>
              </motion.div>
            </div>}
          
        </>
      )}
    </>
  );
};

export default AllBlogs;
