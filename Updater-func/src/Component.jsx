import React,{useState} from 'react';

function Component(){

    const [count,setCount] = useState(0);

    const handleIncrease = () =>{
        setCount(c => c+1)    //updater function (use this arrow fnction in the code it will me more efficient)
        setCount(c => c+1)
    }
    const handleDecrease = () =>{
        setCount(c => c-1)
    }
    const handleReset =() =>{
        setCount(c => c=0)
    }
    return(
        <div className='Counter' >
            <h1>Count : {count} </h1>
            <br></br>
            <div className='buttons'>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
            <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );


}

export default Component