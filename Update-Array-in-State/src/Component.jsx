import React,{ useState } from 'react';

function Component(){
    
    const [foods,setFood] = useState(["Apple","Orange","Banana"]);

    const handleAddFood = () =>{
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFood(f=>[...f,newFood])
    }

    const handleRemoveFood = (index) =>{
            setFood(foods.filter((ll, i) => i !== index));
    }


    return(
        <>
          <h1>Food List : </h1>
          <ol>
            {foods.map((food,index) => 
            <li key = {index} onClick={()=>handleRemoveFood(index)}>
                {food}</li>)}
          </ol>
          <input type='text' id ="foodInput" placeholder='Enter Food Name'/>
          <button onClick={handleAddFood}>Add Food</button>
          
        </>
    );

}

export default Component


