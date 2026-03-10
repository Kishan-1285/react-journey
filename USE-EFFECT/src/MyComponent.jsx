import React ,{useEffect, useState} from 'react' ;

function MyComponent(){

    const[count,setCount] = useState(0);
    const[color,setColor] = useState("green");
    useEffect( ()=>{
        document.title= `count:${count} ${color}`
    },[count,color])
 
    const handleadd = () =>{
        setCount(c=>c+1);
    }

    const handlecolor =() =>{
        setColor(c=>c==="green" ?"red":"green");
    }



    return(
        <>
            <p style={{color:color}}>Count : {count}</p>
            <button onClick={handleadd}>Add</button>
            <button onClick={handlecolor}>Change Color</button>
        </>
    );

}

export default MyComponent ;