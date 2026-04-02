
import {  useState,useEffect,useRef } from 'react';

function MyComponent(){

    // const[click,setClick] = useState("");

   const ref = useRef(0);

   useEffect(()=>{
    console.log("asdf");
   });


    const handleChange = () =>{
        // setClick(e.target.value);
        ref.current++;
    }



    return(
        <>
            <button onClick={handleChange}>Click Me</button>

            {/* <input onChange={handleChange}
               value={ref}
            /> */}
        </>
    );

}

export default MyComponent