import React, { useEffect } from 'react'
import { useState, useRef } from 'react'

function MyComponent() {
    const [name, setName] = useState("");
    let refe = useRef();

    const Display = ()=>{
        console.log(refe.current)
    }

    useEffect(()=>{
           refe.current = name
        // console.log("Nice")
     },[name])
    console.log("Hello");
   // console.log(refe.current);

    return (
        <>
            <h1>Name:{name}</h1>
            <h1>Name using useRef : {refe.current}</h1>
            <input type="text"
                value={name}
                ref={refe}
                onChange={(event) => setName(event.target.value)} />
            <button onClick={Display}>Submit</button>
        </>
    )
}

export default MyComponent