import React from "react";
import "../style/task6.css";
const Task6 = () => {
  return (
    <div className="task6-main">
      <div className="task6-body">
        <div>
          <h1 className="task6-h1">
            * What is the output when I execute both the functions? Are they
            same/different? If yes/no then why?
          </h1>
        </div>
        <div>
          <p className="task6-p">
            ---- : No, the output of two functions are not same because of the
            automatic insertion of semicolon.
            <br />
            ---- : When we call func1() the output will be hello as expected. <br />
            ---- : But when we call func1(), the output will be undefined because
            semicolon is automatically inserted after return.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Task6;
