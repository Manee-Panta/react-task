import React from 'react'
import Navbar from './navbar'

const LandingPage = () => {
  return (
    <div>
     <h1 style={{
        marginTop:'20rem',
        fontFamily:'sans-serif',
        fontSize:'2rem'
     }}>
        Hello Sir,
        Here are the solutions of the task.
     <br />
     I have tried to solve them. 
     <br />
     Waiting for your feeback.
     <br /><br />
     Thank You !!
     </h1>

<br /><br /><br />
     <h1>source code</h1>
     <a style={{'textAlign':'center',display:'block',fontSize:'2.5rem',marginTop:'1rem'}} href="https://github.com/Manee-Panta/react-practice/tree/master/src">https://github.com/Manee-Panta/react-practice/tree/master/src</a>

      
    </div>
  )
}

export default LandingPage