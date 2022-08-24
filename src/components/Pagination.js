import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {GrFormNext,GrFormPrevious} from 'react-icons/gr'

const Pagination = ({ postPerPage, totalPosts,currentPage }) => {
  const nextBtn = (
    <GrFormNext
      // className="editBtn"
      size="15px"
      // color="black"
     
    />)
   const prevBtn = (<GrFormPrevious
      // className="editBtn"
      size="15px"
      // color="black"
     
    />)
    
  const location = useLocation();
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  const maxNoForNextPage =  pageNumbers.length - 1;
  let nextPage = parseInt(currentPage)+1;
  let prevPage = parseInt(currentPage)-1;
  // console.log(currentPage)
  return (
    <>
       {pageNumbers.length>1? <motion.ul 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ delay: 0.8}}
        className="pagination">
           {currentPage >1 ?<li className="flex">
      {location.pathname.includes("AllBlogs") ? (
                <Link className="link paginationLink" to={`/AllBlogs-Page-${prevPage}`}> {prevBtn} </Link>
              ) : (
                <Link className="link paginationLink" to={`/MyBlogs-Page-${prevPage}`}>{prevBtn}</Link>
              )}
      </li>: <div className="link paginationLink"></div>}
      {pageNumbers.map((number) => {
        return (
            <li  key={number}>
              {location.pathname.includes("AllBlogs") ? (
              <Link className={parseInt(currentPage) === number ? "link paginationLink active" : "link paginationLink"} to={`/AllBlogs-Page-${number}`}>{number}
              </Link>
              ) : (
                <Link className="link paginationLink" to={`/MyBlogs-Page-${number}`}>{number}</Link>
              )}
            </li>
        );
      })}
      {currentPage<=maxNoForNextPage ?<li className="flex">
      {location.pathname.includes("AllBlogs") ? (
                <Link className="link paginationLink" to={`/AllBlogs-Page-${nextPage}`}> {nextBtn} </Link>
              ) : (
                <Link className="link paginationLink" to={`/MyBlogs-Page-${nextPage}`}>{nextBtn}</Link>
              )}
      </li>: <div className="link paginationLink"></div>}
      </motion.ul>:<></>}
    </>
  );
};

export default Pagination;
