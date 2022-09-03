import React from "react";
import "../style/task6.css";

const Task7 = () => {
  
  function hookupevents() {
    for (var i = 0; i < 3; i++) {
      document
        .getElementById("button" + i)

        .addEventListener("click", function () {
          alert(i);
        
          console.log(i);
        });
    }
  }
  return (
    <div className="task6-main">
      <div className="task6-body">
        <div>
          <h1 className="task6-h1">
            * Assume that there are three buttons in a webpage with ids:
            button0, button1, button2. What will be the output of the following
            function for each button if the buttons are clicked.{" "}
          </h1>
        </div>
        <div>
          <p className="task6-p">
            ---- : The output will be 3. When we clicked each button, the loop
            will run and i becomes 1, 2 and 3 respectively.
          </p>
        </div>
       <div > 
       <button className="btn" style={{backgroundColor:'black', color:'white', height:'3.1rem', width:'10rem', margin:'2rem'}} onClick={hookupevents} id="button0">
          Button 1
        </button>
        <button style={{backgroundColor:'black', color:'white', height:'3.1rem', width:'10rem', margin:'2rem'}}  onClick={hookupevents} id="button1">
          Button 2
        </button>
        <button style={{backgroundColor:'black', color:'white', height:'3.1rem', width:'10rem', margin:'2rem'}}  onClick={hookupevents} id="button2">
          Button 3
        </button>
       </div>
      </div>
    </div>
  );
};

export default Task7;
