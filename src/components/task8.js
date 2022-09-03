import React from 'react'
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js'

ChartJS.register( 
  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
)
 const Task8 = () => {
  const state = {
    labels:['07-11','07-12','07-13','07-14','07-15','07-16','07-17'],
    datasets: [
      {
        label: 'Sales',
        backgroundColor:['pink','blue','grey','purple','red','green','yellow'],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data:[53,42,88,14,77,68,43],
        
      }
    ]
  }
  return (
    <div>
        <Bar
data={state}
options={{
  responsive:true,
  plugins:{
    legend:{
      position:'top'
    },
    title:{
      display:true,
      text:'Sales of Sanitizer in last 7 days (2021)',
    },

  }
}}
        />
    </div>
  )
}
export default Task8