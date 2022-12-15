import AuthContext from "./authContext";
// import React , {useState} from 'react'

const AuthState = (props) => {
  // const [authName, setauthName] = useState("")
  const host = "https://bloggerstop-backend.vercel.app";
  // const [status, setStatus] = useState([])
  const login = async (email, password) => {
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });
    const json = await response.json();
    // console.log(json);
    return json;
    // setStatus(json);
  };
  const signUp = async (name, email, password) => {
    const response = await fetch(`${host}/api/auth/createUser`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ name: name, email: email, password: password }),
    });
    const json = await response.json();
    return json;
  };
  const getUser = async (id) => {
    const response = await fetch(`${host}/api/auth/getUser`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
        "user-id": id,
      },
    });
    const json = await response.json();
    return json;
  };
  return (
    <AuthContext.Provider
      value={{
        login,
        signUp,
        getUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
