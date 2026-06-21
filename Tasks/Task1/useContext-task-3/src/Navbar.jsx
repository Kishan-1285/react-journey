import React, { useState } from 'react'
import { createContext } from 'react';
import Product from './Product';
export const countContext = createContext();
function Navbar() {
    const[count,setCount] = useState(0);
  return (
    <>
     <h1>Cart Item : {count}</h1>
    <countContext.Provider value={{count,setCount,}}>
    <Product/>
    </countContext.Provider>
    </>
  )
}

export default Navbar