import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import "./styles/navbar.css";
import { motion } from "framer-motion";
const Navbar = () => {
  const history = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("auth-Token");
    setIsMobile(false);
    history("/");
  };

  const [isMobile, setIsMobile] = useState(false);
  const hamburgerMenu = (
    <AiOutlineMenu
      className="hamburger"
      size="45px"
      color="black"
      onClick={() => {
        setIsMobile(!isMobile);
      }}
    />
  );
  const cancelBtn = (
    <GiCancel
      className="hamburger"
      size="45px"
      color="black"
      onClick={() => {
        setIsMobile(!isMobile);
      }}
    />
  );
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <>
      <div className="navbar">
        <div className="bloggerStop">
          <motion.div
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.1 }}
          >
            <Link className="bloggerStop" to={"/"}>
              BloggerStop
            </Link>
          </motion.div>
        </div>
        
        <div className={isMobile ? "navLinks" : "navLinks-mobile navLinks"}>
          <motion.div
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.2 }}
            className="navItems"
          >
            {/* Home Link */}
            {isMobile ? (
              <motion.div
                isMobile
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.2 }}
              >
                <Link
                  className="link"
                  onClick={() => {
                    setIsMobile(false);
                  }}
                  to={"/"}
                >
                  Home
                </Link>
              </motion.div>
            ) : (
              <Link
                className="link"
                onClick={() => {
                  setIsMobile(false);
                }}
                to={"/"}
              >
                Home
              </Link>
            )}
            {/* All Blog Link */}
            {isMobile ? (
              <motion.div
                isMobile
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.2 }}
              >
                <Link
                  className="link"
                  onClick={() => {
                    setIsMobile(false);
                  }}
                  to={"/AllBlogs-Page-1"}
                >
                  All Blogs
                </Link>
              </motion.div>
            ) : (
              <Link
                className="link"
                onClick={() => {
                  setIsMobile(false);
                }}
                to={"/AllBlogs-Page-1"}
              >
                All Blogs
              </Link>
            )}
            {/* Contact Us Link */}
            {isMobile ? (
              <motion.div
                isMobile
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.3 }}
              >
                <Link
                  className="link"
                  onClick={() => {
                    setIsMobile(false);
                  }}
                  to={"/ContactUs"}
                >
                  Contact Us
                </Link>
              </motion.div>
            ) : (
              <Link
                className="link"
                onClick={() => {
                  setIsMobile(false);
                }}
                to={"/ContactUs"}
              >
                Contact Us
              </Link>
            )}
            {/* My Blogs Page Link */}
            {isMobile ? (
              <motion.div
                isMobile
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.4 }}
              >
                <Link
                  className="link"
                  onClick={() => {
                    setIsMobile(false);
                  }}
                  to={"/MyBlogs-Page-1"}
                >
                  My Blogs
                </Link>
              </motion.div>
            ) : (
              <Link
                className="link"
                onClick={() => {
                  setIsMobile(false);
                }}
                to={"/MyBlogs-Page-1"}
              >
                My Blogs
              </Link>
            )}
          </motion.div>
          {/* Links for login , signUp And Logut */}
        </div>
          <div className={isMobile ? "buttons" : "navLinks-mobile navLinks"}>
            {!localStorage.getItem("auth-Token") ? (
              <motion.div
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.3 }}
                className="navItems"
              >
                {/* Link for Login */}
                {isMobile ? (
                  <motion.div
                    isMobile
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{ delay: 0.4 }}
                  >
                    <Link
                      to={"/Login"}
                      onClick={() => {
                        setIsMobile(false);
                      }}
                      className="btn login"
                    >
                      Login
                    </Link>
                  </motion.div>
                ) : (
                  <Link
                    to={"/Login"}
                    onClick={() => {
                      setIsMobile(false);
                    }}
                    className="btn login"
                  >
                    Login
                  </Link>
                )}
                {/* Link For SignUp */}
                {isMobile ? (
                  <motion.div
                    isMobile
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{ delay: 0.5 }}
                  >
                    <Link
                      to={"/SignUp"}
                      onClick={() => {
                        setIsMobile(false);
                      }}
                      className="btn signUp"
                    >
                      Sign Up
                    </Link>
                  </motion.div>
                ) : (
                  <Link
                    to={"/SignUp"}
                    onClick={() => {
                      setIsMobile(false);
                    }}
                    className="btn signUp"
                  >
                    Sign Up
                  </Link>
                )}
              </motion.div>
            ) : (
              <motion.div
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.3 }}
                className="navItems"
              >
                {/* Link For Logout */}
                {isMobile ? (
                  <motion.div
                    isMobile
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{ delay: 0.4 }}
                  >
                    <Link to={"/"} onClick={handleLogout} className="btn logout">
                      Logout
                    </Link>
                  </motion.div>
                ) : (
                  <Link to={"/"} onClick={handleLogout} className="btn logout">
                    Logout
                  </Link>
                )}
              </motion.div>
            )}
          </div>
        {isMobile ? cancelBtn : hamburgerMenu}
      </div>
    </>
  );
};

export default Navbar;
