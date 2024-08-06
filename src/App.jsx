import React, { useState } from 'react'
import ChildComponent from './ChildComponent'
const App = () => {
  let data = [{
     task: 'Date of Ragsitration',
     type: 'text'
  },
  {
  
    task: 'Vender Score',
     type: 'text'
 },
 {
 task: 'Rating',
     type: 'text'
},
{
task: 'Status',
     type: 'text'
},
{
task: 'Type Of Bussiness',
     type: 'text'
},
{
  task: 'Location',
       type: 'text'
  },
  {
    task: 'Assign to',
         type: 'text'
    },
]
let [finalData, setFinalData] = useState(data)

  let [buttonname , setButtonName] = useState("Filter")
  return (
 
    <div>
     <ChildComponent dropdowndata= {finalData} btnName ={buttonname}/>
      
      </div>
  )
}

export default App
