import React from "react";
import "../style/task9.css";
const Task9 = () => {
  return (
    <div className="task9-main">
      <div className="task9-body">
        <div>
          <h1 className="task9-h1">
            * What is the difference between Server Side Rendering (SSR) and
            Static Site Generation (SSG)? When would you prefer SSG over SSR?
          </h1>
        </div>
        <div>
          <p className="task6-p">
            <h3>Server Side Rendering (SSR)</h3>
            SSR is conducted by the server. The user makes a request to the
            server, the server processes the HTML, CSS, and JavaScript on-demand
            and delivers a fully loaded page to the user's browser. It is also
            known by the term pre rendering. Here, HTML is generated during run
            time when user request.
            <br />
            <br />*
            <li >
              
              -If our site is more static we can use SSR.
            </li>
            <li >
            
              -If the amount of user is not large.
            </li>
            <li >
              -Small amount of interactivity.
            </li>
            <br />
            <br />
            <h3>Static Site Generation (SSG)</h3>
            SSG generators pre-build HTML pages and make them available to the
            user ahead of time. This means that whenever a user requests a page,
            it loads with no delay. This happens so fast as the site is static
            and the generator renders the pages at build time. i.e. HTML is
            generated during build time before user's request.
            <br />
            <br />*
            <li >
             
              -Such websites are extremely fast.
            </li>
            <li >
             
              -The website needs to be rebuilt and reloaded entirely every time
              a change is made..
            </li>
            <li >
              -SSG-based websites are far less interactive and native-like than
              those that rely on SSR..
            </li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Task9;
