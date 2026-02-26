import React, {useState} from "react";
// function Counter({subject}){
    function Counter(){
    
    const[count,setCount]= useState(0);



    const Increase = ()=> {
        setCount(count+1);
    };

    const Decrease = ()=> {
        setCount(count-1);
    };

      const Reset = ()=> {
        setCount(0);
    };

   

    return(
        <div className="counter">
        {/* <p>{subject}: {count}</p> */}
         <p>Marks: {count}</p>
        <button onClick={Increase}>increament</button>

        <button onClick={Decrease}>decreament</button>

        <button onClick={Reset}>reset</button>        
        </div>
    );


}
export default Counter