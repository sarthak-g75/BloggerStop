// import React, { useState } from "react";
import BlogContext from "./blogContext";
import { useContext, useState } from "react";
import authContext from "../auth/authContext";

const BlogState = (props) => {
  const context = useContext(authContext);

  const { getUser  } = context;
  const host = "https://bloggerstopmern.herokuapp.com";
  // let initialBlogs = [];
  let initialAlert = {
    state: false,
    message: "",
    type: "",
  };
  const [blogs, setBlogs] = useState([]);
  const [blogPage, setblogPage] = useState([]);
  const [alert, setalert] = useState(initialAlert);

  const creatingAlert = (state, message, type) => {
    setTimeout(() => {
      setalert({ state, message, type });
    }, 200);

    setTimeout(() => {
      setalert({
        state: false,
        message: "",
        type: "",
      });
    }, 2000);
  };

  // Calling API to Fetch All Blogs
  const fetchAllBlogs = async () => {
    const response = await fetch(`${host}/api/blogs/fetchAllBlogs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    // Adding Author's name to every blog
    json.forEach( (element, index) => {
      getUser(element.user).then((res) => {
        if (res.success) {
          json[index].author = res.user.name;
          console.log(res.user.name);
        }
      });
    });
    setBlogs(json);

    // console.log(json);
  };

  //  API to get a blog from blog it (used when clicked on a blog to read it completely)
  const getBlog = async (id) => {
    const response = await fetch(`${host}/api/blogs/blog/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    // calling the auth API to get author's name using user id

    getUser(json.user).then((res) => {
      // setting the author

      json.author = res.user.name;
      setblogPage(json);

    return json;
    });

    
    
  };

  // API to get blogs of the logged in user
  const getPersonalBlogs = async () => {
    const authToken = localStorage.getItem("auth-Token");
    const response = await fetch(`${host}/api/blogs/fetchBlogs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
    });
    const json = await response.json();
    

    // setTimeout(() => {
    setBlogs(json);
    // }, 500);
  };

  // API to edit the blog of a logged in user
  const editBlog = async (id, title, description, genre) => {
    const response = await fetch(`${host}/api/blogs/updateBlog/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-Token"),
      },
      body: JSON.stringify({
        title: title,
        description: description,
        genre: genre,
      }),
    });
    const json = await response.json();
    if (json.success) {
      creatingAlert(true,"Blog Edited Successfully","success");
    }
    else{
      creatingAlert(true,"Failed To Edit The Blog","danger");
    }

    return json;
  };

  //  API to create a new blog
  const createBlog = async (title, description, genre) => {
    const response = await fetch(`${host}/api/blogs/addBlogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-Token"),
      },
      body: JSON.stringify({
        title: title,
        description: description,
        genre: genre,
      }),
    });
    const json = await response.json();
    if (json.success){
      creatingAlert(true,"Blog Created Successfully","success");
    }
    else{
      creatingAlert(true,"Failed To Add Blog","danger");
    }

    return json;
  };

  // Api To delete a blog
  const deleteBlog = async (id) => {
    const response = await fetch(`${host}/api/blogs/deleteBlog/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-Token"),
      },
    });
    const json = await response.json();
    if (json.success) {
      creatingAlert(true,"Blog Deleted Successfully","success");
    }
    else{
      creatingAlert(true,"Failed To Delete The Blog","danger");
    }
    return json;
  };
  return (
    <BlogContext.Provider
      value={{
        blogPage,
        blogs,
        fetchAllBlogs,
        getBlog,
        getPersonalBlogs,
        editBlog,
        createBlog,
        deleteBlog,
        alert,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};
export default BlogState;
