import React, { useState } from 'react'
import { useRef } from 'react'
function Task2() {
    const[name,setName] = useState("")
    const count = useRef(0);
    count.current++;
    const display=(e)=>{
        (setName(e.target.value));
        
    }
  return (
    <>
    <input type="text"  value={name} onChange={display}/>
    <h1>{count.current}</h1>
    
    </>
  )
}

export default Task2