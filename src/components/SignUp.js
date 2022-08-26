import React, { useState, useContext, useEffect } from "react";
import authContext from "../context/auth/authContext";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Notification from "./Notification";
const SignUp = () => {
  const history = useNavigate();
  const context = useContext(authContext);
  const { signUp } = context;

  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [pass, setpass] = useState();
  const [conpass, setConpass] = useState();
  const [message, setmessage] = useState("")
  const [noti, setnoti] = useState(false)
  document.title = "BloggerStop - Sign Up"

  useEffect(() => {
    if (localStorage.getItem("auth-Token")) {
      history("/");
    }
  }, []);

  const setName = (e) => {
    setname(e.target.value);
  };
  const setMail = (e) => {
    setemail(e.target.value);
  };
  const setPass = (e) => {
    setpass(e.target.value);
  };
  const setConPass = (e) => {
    setConpass(e.target.value);
  };
  const SignUpAttempt = (e) => {
    e.preventDefault();
    if (pass === conpass && pass.length>5 && name.length>3) {
      signUp(name, email, pass).then((res) => {
        if (res.success) {
          localStorage.setItem("auth-Token", res.authToken);
          history("/");
        } else {
        
          setnoti(true);
          setmessage(res.error)
          setTimeout(()=>{
            setnoti(false);
            setmessage("");
          },2000)
        }
      });
    } 
    //  checking if password matches
    else if(pass !== conpass) {
        
      setnoti(true);
      setmessage("Passwords didn't match")
      setTimeout(()=>{
        setnoti(false);
        setmessage("");
      },2000)
    }
    // checking if pass is more than 5 chars or not
    else if(pass.length<5){
      setnoti(true);
      setmessage("Password should contain atleast 5 characters")
      setTimeout(()=>{
        setnoti(false);
        setmessage("");
      },2000)
    }
    // checking if username is more than 3 chars
    else if(name.length<3){
      setnoti(true);
      setmessage("Username should contain atleast 3 characters")
      setTimeout(()=>{
        setnoti(false);
        setmessage("");
      },2000)
    }
  };

  return (
    <>
      {noti?<Notification message={message} type={"danger"}/>:<></>}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="blogWriting-bg"
      ></motion.div>
      <div className="signUp-bg-img"></div>
      <div className="blogWritingBox">
        <motion.form
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="form "
          onSubmit={SignUpAttempt}
        >
          <div className="formElem">
            <label htmlFor="name">Enter Username</label>

            <input
            placeholder="Enter a unique username"
              className="formInput"
              type="text"
              id="name"
              name="name"
              
              onChange={setName}
            />
          </div>
          <div className="formElem">
            <label htmlFor="email">Enter your email</label>
            <input
            placeholder="Enter your Email Id"
              className="formInput"
              type="email"
              id="email"
              name="email"
              onChange={setMail}
            />
          </div>
          <div className="formElem">
            <label htmlFor="password">Password</label>
            <input
            placeholder="Enter a password"
              className="formInput"
              type="password"
              id="password"
              name="password"
              onChange={setPass}
            />
            <label htmlFor="password">(containing atleast 5 characters)</label>
          </div>
          <div className="formElem">
            <label htmlFor="Conpassword">Confirm Password</label>
            <input
            placeholder="Re-enter your passord"
              className="formInput"
              type="password"
              id="Conpassword"
              name="Conpassword"
              onChange={setConPass}
            />
          </div>
          <div className="formElem">
            <button className="submitBtn" type="submit">
              Sign Up
            </button>
            <Link className="link" to={"/Login"}>
              Already have an account? Login
            </Link>
            <Link className="link" to={"/"}>
              Want To read Blogs anonymously
            </Link>
          </div>
        </motion.form>
      </div>
    </>
  );
};

export default SignUp;
