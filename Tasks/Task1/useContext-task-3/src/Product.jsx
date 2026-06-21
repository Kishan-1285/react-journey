import React from 'react'
import {useContext} from 'react';
import { countContext } from './Navbar';


function Product() {
    const product = useContext(countContext);
  const handleChange=()=>product.setCount((c)=>c+1)


  return (
    <>
       <div>
        <h1>Laptop</h1>
        <button onClick={handleChange}>Add to Cart</button>
       </div>
       <div>
        <h1>Mobile</h1>
        <button onClick={handleChange}>Add to Cart</button>
       </div>
    
    
    </>
  )
}

export default Product