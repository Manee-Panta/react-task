import React from 'react'


function Child({func}) {
    function update(){
        func(15)
          }
  return (
    
    <div>
        <button className='add' onClick={update}>Add 5</button>
    </div>
  )

}

export default Child