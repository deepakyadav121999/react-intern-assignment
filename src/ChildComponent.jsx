import React, { useState } from 'react'
import './App.css'
const ChildComponent = ({dropdowndata, btnName}) => {
    console.log(dropdowndata)

    let [hide,sethide] = useState('none')

  return (
    <div className='flex-last'>
        <div className='perm_width'>
        <button onClick={()=>{
        if(hide == 'none'){
            sethide('block')
        }
        else{
            sethide('none')
        }
        
       }}>{btnName}</button>
        <div  className = {` ${hide} brd`}>
        <p>Refine by   <span onClick={()=>{

        }} className='color'> Clear X </span></p>
            {
                dropdowndata && dropdowndata.map((item)=>{
                   return <div className='flex'>
                   <div className='inside_flex'>
                    <p>{item.task}</p>
                   <input type= {item.type}   className='ip_drop'  placeholder='>'/> 
                   </div>
             
                   </div>
                   
                })
            }
           
        </div>
        </div>
       
    </div>
  )
}

export default ChildComponent