import React, { Component } from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Display from "./components/display";
import Parent from "./components/parent";
import Task3 from "./components/task3";
import Task4  from "./components/task4";
import Home from "./components/portfolio/home";
import Contact from "./components/portfolio/contact";
import Skill from "./components/portfolio/skill";
import About from "./components/portfolio/about";
import Task6 from "./components/task6";
import Task7 from "./components/Task7";
import Task5 from "./components/task5";
import Task8 from "./components/task8";
import Task9 from "./components/Task9";
import Login from "./components/Login";
import About5 from "./components/About5";
import Service5 from "./components/Service5";
import Contact5 from "./components/Contact5";
import Protected from "./components/Protected";
import Task10 from "./components/Task10";
import LandingPage from "./components/LandingPage";


const App = () => {
  return (<>    

    <Router>
            
      <Navbar/>
      <Routes>
<Route exact path="/" element={<LandingPage/>}/>
        <Route
          path="/task1"
          element={
            <Display
              name={"manita"}
              email={"pantamanee145@gmail.com"}
              phone={9840264048}
            />
          }
        />
        <Route path="/task2" element={<Parent />} />
        <Route path="/task3" element={<Task3 />} />
        <Route path="/task4" element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/skill' element={<Skill/>}/>
        <Route path="/task5" element={<Task5/>}/>
        <Route element={<Protected/>}>
        <Route path="/task5/about" element={<About5/>}/>
        <Route path="/task5/service" element={<Service5/>}/>
        </Route>
        <Route path="/task5/contact" element={<Contact5/>}/>
        <Route path="/login" element={<Login/>}/>
        

        <Route path="/task6" element={<Task6/>}/>
        <Route path="/task7" element={<Task7/>}/>
        <Route path="/task8" element={<Task8/>}/>
        <Route path="/task9" element={<Task9/>}/>
        <Route path="/task10" element={<Task10/>}/>
   

      </Routes>

    </Router>
    </>
  );
};

export default App;
