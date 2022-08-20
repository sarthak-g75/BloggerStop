import React, { useContext, useState, useEffect } from "react";
import authContext from "../context/auth/authContext";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Notification from "./Notification";


const Login = () => {
  const history = useNavigate();
  const context = useContext(authContext);
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  document.title = "BloggerStop - Login"

  useEffect(() => {
    if (localStorage.getItem("auth-Token")) {
      history("/");
    }
  }, []);
  const setMail = (e) => {
    setemail(e.target.value);
  };
  const setPass = (e) => {
    setpassword(e.target.value);
  };

  const { login } = context;
  const [noti, setnoti] = useState(false)
  const loginAttempt = (e) => {
    e.preventDefault();

    login(email, password).then((res) => {
      // console.log(res);
      if (res.success) {
        localStorage.setItem("auth-Token", res.authToken);
        history("/");
        //   console.log(status)
      } else {
        
        setnoti(true);
        setTimeout(()=>{
          setnoti(false);
        },2000)
      }
    });
    // console.log(login(email,password))
    // console.log(status);
  };
  return (
    <>
    {noti?<Notification message={"Incorrect Credentials"} type={"danger"}/>:<></>}
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="blogWriting-bg"
      ></motion.div>
      <div className="login-bg-img"></div>
      <div className="blogWritingBox">
        <motion.form
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="form " onSubmit={loginAttempt}>
          <label className="bold" htmlFor="email">
            Enter email:
          </label>

          <input
            className={"formInput"}
            type="email"
            id="email"
            placeholder="Enter your Email Id"
            name="email"
            onChange={setMail}
          />

          <label className="bold" htmlFor="password">
            Password
          </label>
          <input
            className={"formInput"}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            onChange={setPass}
          />
          <div className="formElem">
            <button className="submitBtn" type="submit">Login</button>
            <Link className="link" to={"/SignUp"}>Create a new Account</Link>
            <Link className="link" to={"/"}>Want To read Blogs anonymously</Link>
          </div>
        </motion.form>
      </div>
    </>
  );
};

export default Login;
