import React, { useEffect,useState } from "react";

const Task10 = () => {
const [result,setresult]=useState([])
  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data= await response.json();
    setresult(data);
  }

  useEffect(() => {
    getUsers();
  },[]);
  
  return (
  <div style={{'background':'rgb(226, 222, 222)','height':'100vh', width:'100vw','paddingLeft':'0rem'}}>

 {
    result.map((item,index)=>{return (<>
    <h1 style={{'paddingTop':'1.0rem'}} >Name:{item.name}</h1>
    <h1>Email:{item.email}</h1>

    </>) 
    
})
  };
 
  
  </div>
  )
  
  
};

export default Task10;
