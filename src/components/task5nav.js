import React from "react";
import { NavLink } from "react-router-dom";
const Task5nav = () => {
  return (
    <div>
      <div className="task5-nav">
       
      <ol>
        <li>
          {" "}
          <NavLink to="/task5/about">About</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/task5/service">Service</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/task5/contact">Contact</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/login">Login</NavLink>
        </li>
      </ol>
    </div>
    </div>

  );
};

export default Task5nav;
