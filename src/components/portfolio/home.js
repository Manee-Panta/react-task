import React from "react";
import Task4 from "../task4";
import "../../style/task4.css";
import profile from '../../images/manee.jpg'
import { useNavigate } from "react-router-dom";

const Home = () => {
const navigate=useNavigate();
  function hire(){
navigate('/contact')
  }
  function show(){
navigate('/about')
  }
  return (
    <div>
      <Task4 />
      <div className="portfolio-body">
        <div className="cart">
          <h1 className="home-h1">Manita Panta</h1>
          <h4 style={{
            fontFamily:'cursive'
          }}>Frontend Developer</h4>
        
          <p className="home-p">
           
           <button onClick={hire}>Hire Me</button>
           <button onClick={show}>View Details</button>
          </p>
        </div>
        <div className="cart">
          <img src={profile} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};
export default Home;
