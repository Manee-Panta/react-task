import React from 'react'
import Child from './child'
import { useState } from 'react';
import '../style/task2.css'

function Parent() {
    const [num, setnum] = useState(10);
  return (

<div className='task2-main'>
    <div className='parent'>
        <h1>The number is :{num}</h1>
     <div>   <Child func={setnum}/></div>
    </div>
    </div>
  )
}

export default Parent