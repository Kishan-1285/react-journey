import React, { useState } from 'react'

const App = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const themeStyle = {
    backgroundColor :dark?"black":"white",
    color: dark?"white":"black",
  }

  const doubleNumber = slowFunction(number);
  return (
    <>
    <input value={number} type='number' onChange={(e)=>setNumber(e.target.value)}/>
    <button onClick={()=>setDark((curr)=>!curr)}>Submit</button>
    <div style={themeStyle}>{doubleNumber}</div>
    </>
  )
}

export default App

function slowFunction(num){
  for(let i=0;i<1000000000;i++){
  }
  return num*2;
}