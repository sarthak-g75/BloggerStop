import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogContext from "../context/blogs/blogContext";
import Loader from "./Loader";
import "./styles/blogPage.css";
import { motion } from "framer-motion";

const BlogPage = () => {
  const context = useContext(blogContext);
  const { blogPage, getBlog } = context;
  const [loading, setloading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setloading(true);
    getBlog(id).then(()=>{
      setloading(false);
    });


  }, []);

  return (
    <>
      {loading ? <Loader />:
      <>
       <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="blogPage-bg"
      ></motion.div>
      <motion.div
        
        className="blogPage-bg-img"
      ></motion.div>
      <motion.div
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }} className="blogPageBox">
         <div className="blogPageContainer">
          <div className="blogTitle">{blogPage.title}</div>
          <div className="blogPageElem"><strong> Genre: </strong> <div className="blogGenre">{blogPage.genre}</div></div>
          <div className="blogDescription">{blogPage.description}</div>
         
            <div className="blogAuthor">- {blogPage.author}</div>
       
          {/* <div className="abs">{blogPage.likes}</div> */}
        </div>
        </motion.div>
      </>}
    </>
  );
};

export default BlogPage;
