import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const userAuth=()=>{
  const user = { loggedIn:false};
  console.log(user)
  return user && user.loggedIn;
}

const Protected = () => {
  const isAuth=userAuth();
  console.log(isAuth)

return isAuth ? <Outlet/> : <Navigate to='/Login'/>;
}


export default Protected;
