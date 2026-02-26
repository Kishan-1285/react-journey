import React, {useState} from "react";

function Mycomponent(){
          
    const[name,setName] = useState("Guest");
    const[age,setAge] = useState(0);
    const[IsStudent,setIsStudent] =useState(false) ;


    const updateName = () =>{
        setName("Gokul");
    }
    const updateAge = () =>{
        setAge(age+1);
    }
    const updateAge2 = () =>{
        setAge(age-1);
    }
    const updateValue=()=>{
        setIsStudent(!IsStudent);
    }


        return(
            <div className="whole">
            <p>Name :{name}</p>
            <button onClick={updateName}>SetName</button>
             {/* <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            /> */}

            <p>Age:{age}</p>
            <button onClick={updateAge}>increament</button>
             <button onClick={updateAge2}>decreament</button>

            <p>Student:{IsStudent ? "yes" : "no"}</p>
            <button onClick={updateValue}>Click</button>
                        


            </div>
        );

}

export default Mycomponent