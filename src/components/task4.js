import React from "react";
import "../style/task4.css";
import { Link } from "react-router-dom";

export const Task4 = () => {
  return (
    <div>
      <div className="portfolio-main">
        <div className="portfolio-nav">
          <div className="logo">Manita</div>
          <div className="line">
            <ol>
              <li>
                <Link to={"/home"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/skill"}>Skills</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ol>
          </div>
          <div class="dropdown">
            <span>Manita ▾ </span>
            <div class="dropdown-content">
              <li>
                <Link to={"/home"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/skill"}>Skills</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default Task4
