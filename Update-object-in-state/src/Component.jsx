import React, {useState} from "react";


function Component(){

    const [car,setCar] = useState(
                                    {year:2025,
                                     brand:"ford",
                                     model:"mustang"
                                    }
                                   );

    const handleyearChange =(e)=>{
        setCar({...car ,year:e.target.value});
    }
     const handlebrandChange =(e)=>{
        setCar({...car ,brand:e.target.value});
    }
     const handlemodelChange =(e)=>{
        setCar({...car ,model:e.target.value});
    }
    return(
        <div className="Updater-func">
                <p>Your favorite car is : {car.year} {car.brand} {car.model}</p>
                
                <input type='number' value={car.year} onChange={handleyearChange}/><br/>
                <input type='text' value={car.brand} onChange={handlebrandChange}/><br/>
                <input type='text' value={car.model} onChange={handlemodelChange}/>   
        </div>
    );

}

export default Component