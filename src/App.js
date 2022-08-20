import "./App.css";
// import ReactDOM from "react-dom/client";
import { Routes, Route} from "react-router-dom";
import BlogState from "./context/blogs/BlogState";
import AuthState from "./context/auth/AuthState";
// import Navbar from "./components/Navbar";
import AllBlogs from "./components/AllBlogs";
import ContactUs from "./components/ContactUs";
import MyBlogs from "./components/MyBlogs";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import BlogWritingPage from "./components/BlogWritingPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import BlogPage from "./components/BlogPage";
import EditBlog from "./components/EditBlog";

// import Notification from "./components/Notification";
function App() {
  // const location = useLocation();
  // console.log(location.pathname );
  return (
    <>
      <AuthState>
      <BlogState>
        {/* <BrowserRouter> */}
          {/* {location.pathname === '/Login'? <></>  : location.pathname === '/SignUp' ? <></> : <Navbar/>} */}
          <Navbar/>
          {/* <Notification/> */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/AllBlogs-Page-:no" element={<AllBlogs />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            
            <Route path="/MyBlogs-Page-:no" element={<MyBlogs />} />
            <Route path="/BlogWritingPage" element={<BlogWritingPage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/BlogPage/:id" element={<BlogPage />} />
            <Route path="/EditBlog/:id" element={<EditBlog />} />
          </Routes>
        {/* </BrowserRouter> */}
      </BlogState>
      </AuthState>
    </>
  );
}

export default App;
