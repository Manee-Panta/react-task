import React from "react";
import Task5nav from "./task5nav";
import { useNavigate } from "react-router-dom";
const Login = () => {
   

    const navigate = useNavigate()
    const loginbtn=()=>{
        navigate('/task5')
     

    }
  return (
    <div>
      <Task5nav />
      <div className="hero">
        <div className="login-body">
          <input type="text" placeholder="email"></input>
          <button onClick={loginbtn}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
