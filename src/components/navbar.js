import React from "react";
import { Link } from "react-router-dom";
import '../style/navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-main">
        <ul>
          <li>
            <Link to="/" active >Home</Link>
          </li>
          <li>
            <Link to="/task1">Task1</Link>
          </li>
          <li>
            <Link to="/task2">Task2</Link>
          </li>
          <li>
            <Link to="/task3">Task3</Link>
          </li>
          <li>
            <Link to="/task4">Task4</Link>
          </li>
          <li>
            <Link to="/task5">Task5</Link>
          </li>
          <li>
            <Link to="/task6">Task6</Link>
          </li>
          <li>
            <Link to="/task7">Task7</Link>
          </li>
          <li>
            <Link to="/task8">Task8</Link>
          </li>
          <li>
            <Link to="/task9">Task9</Link>
          </li>
          <li>
            <Link to="/task10">Task10</Link>
          </li>
        
        </ul>
      </div>
    
    </div>
  );
};
export default Navbar;
