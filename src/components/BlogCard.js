import React, { useContext } from "react";
// import {Link} from 'react-router-dom'
import blogContext from "../context/blogs/blogContext";
import { motion } from "framer-motion";
import {BsFillPencilFill ,BsFillTrashFill} from 'react-icons/bs'
import "./styles/blogCard.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
const BlogCard = (props) => {
  const history = useNavigate();
  const location = useLocation();
  const context = useContext(blogContext);
  const { deleteBlog } = context;
  // console.log(props.element);
  const { _id, title, author, description, genre } = props.element;
  //   console.log(_id);

  const dltBlog = (id) => {
    deleteBlog(id).then((res) => {
     
        history("/");
      // }
    });
  };
  const editBtn = (
    <BsFillPencilFill
      className="editBtn"
      size="20px"
      // color="black"
     
    />)
  const dltBtn = (
    <BsFillTrashFill
      className="dltBtn"
      size="20px"
      // color="black"
     
    />)
  return (
    <motion.div
      initial={{ opacity: 0,y:40 }}
      animate={{ opacity: 1 ,y:0}}
      transition={{ delay: 0.5 }}
      key={_id}
      className="card"
    >
      <div className="section">
        <div className="titleNgenre seperation">
          <h2 className="title">
            {title.length > 15 ? title.substr(0, 15) + "..." : title} |
          </h2>
          <h4 className="genre">
            {genre.length > 10 ? genre.substr(0, 10) + "..." : genre}
          </h4>
        </div>
        <p className="description">
          {description.length > 200
            ? description.substr(0, 200) + "..."
            : description}
        </p>
      </div>

      {/* <div className="section"> */}
      {location.pathname.includes("MyBlogs") ? (
        <div className="buttonsMyBlogs">
          <Link className="readBtn" to={`/BlogPage/${_id}`}>
            Read Full Blog
          </Link>
          <div className="seperationBlog">
            <Link to={`/EditBlog/${_id}`}>{editBtn}</Link>
            <button className="dltBtn"
              onClick={() => {
                dltBlog(_id);
              }}
            >
              {dltBtn}
            </button>
          </div>
        </div>
      ) : (
        <div className="titleNgenre">
          {" "}
          <h3 className="author">-{author}</h3>
          <Link className="readBtn" to={`/BlogPage/${_id}`}>
            Read Full Blog
          </Link>
        </div>
      )}
      {/* </div> */}
    </motion.div>
  );
};

export default BlogCard;
