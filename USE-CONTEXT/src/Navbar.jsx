import React from 'react'
import { themeContext } from './App'
import { useContext } from 'react';
import Home from './Home';

function Navbar() {
    const navbar = useContext(themeContext);

     const themeStyle ={
    background: navbar.theme ==="light"? "white" :"black" ,
    color : navbar.theme==="light"? "black" :"white",
    
  }

    const handleChange=()=>{
        navbar.setTheme((curr)=> curr==="light"?"dark":"light")
    }

    return (
       <>
          <div style={themeStyle}>
            <h1>Navbar</h1>
            <button  onClick={handleChange}>Click</button>
          </div>
       </>
  )
}

export default Navbar