import React, { useContext, useState, useEffect } from "react";
import blogState from "../context/blogs/blogContext";
import { useNavigate } from "react-router-dom";
import "./styles/blogWriting.css";
import { motion } from "framer-motion";
import Notification from "./Notification";
// import { set } from "mongoose";
const BlogWritingPage = () => {
  const [noti, setnoti] = useState(false)
const [btnState, setbtnState] = useState(false);
  const history = useNavigate();
  const context = useContext(blogState);
  const { createBlog } = context;
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [genre, setgenre] = useState("");
  useEffect(() => {
    if (!localStorage.getItem("auth-Token")) {
      history("/login");
    }
  }, []);

  const setTitle = (e) => {
    settitle(e.target.value);
  };
  const setDescription = (e) => {
    setdescription(e.target.value);
  };
  const setGenre = (e) => {
    setgenre(e.target.value);
  };
  const createAttempt = (e) => {
    setbtnState(true)
    setTimeout(()=>{
      setbtnState(false)
  },1000)
    e.preventDefault();
    if (title.length > 5 && description.length > 10 && genre.length > 3) {
      createBlog(title, description, genre).then((res) => {
        if(res.success){
          history("/");
        }
      });
    } else {
      setnoti(true);
        setTimeout(()=>{
          setnoti(false);
        },2000)
      
    }
  };
  return (
    <>
        {noti?<Notification message={"Please Fill the fields properly"} type={"danger"}/>:<></>}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="blogWriting-bg"
      ></motion.div>
      <motion.div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ delay: 0.6 }}
        className="blogWriting-bg-img"
      ></motion.div>
      <div className="blogWritingBox">
        <motion.form
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="blogWritingContainer"
          onSubmit={createAttempt}
        >
          <div className="blogWritingElem">
            <label className="bold" htmlFor="title">
              Title:
            </label>
            <input
              className="inputBox titleInput"
              type="text"
              id="title"
              name="title"
              placeholder="Enter a title conatining atleast 5 characters"
              value={title}
              onChange={setTitle}
            />
          </div>

          <div>
            <label className="bold" htmlFor="description">
              Blog:
            </label>
            <br />
            <br />
            <textarea
              className="inputBox descriptionInput"
              name="description"
              cols="90"
              rows="20"
              placeholder="Enter blog conatining atleast 10 characters"
              value={description}
              onChange={setDescription}
            ></textarea>
          </div>

          <div className="blogWritingElem">
            <label className="bold" htmlFor="genre ">
              Genre:
            </label>
            <input
              className="inputBox genreInput"
              type="text"
              id="genre"
              name="genre"
              placeholder="Atleast 3 characters"
              value={genre}
              onChange={setGenre}
            />
            <button className="submitBtn" disabled={btnState} type="submit">
              Submit
            </button>
          </div>
        </motion.form>
      </div>
    </>
  );
};

export default BlogWritingPage;
