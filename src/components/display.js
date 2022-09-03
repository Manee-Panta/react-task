import React from "react";
import '../style/display.css'
const Display =({name, email, phone})=>{
  return(
<div className="body">
  <div className="main">

  
    <ol>
        <li><span>Name: </span>  {name}</li>
        <li> <span>Email:</span> {email}</li>
        <li> <span>Phone: </span> {phone}</li>
    </ol>
</div>
</div>
  )
}
export default Display
