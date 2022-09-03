import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/task5.css'
import Task5nav from './task5nav'
const Task5 = () => {
  return (
    <div className='task5-main'>
<Task5nav/>
        <div className='hero'>
        <h1>Here we are using the protected route</h1>
        <p>User can enter into the other pages only if he/she is logged in. </p>
        </div>
    </div>
  )
}
const Aboutt=()=>{
    return(
        <div>
            <h1>This is about page</h1>
        </div>
    )
}

export default Task5