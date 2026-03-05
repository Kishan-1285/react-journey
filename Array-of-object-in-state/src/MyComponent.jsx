import react, {useState} from 'react';

function MyComponent(){

    const [car,setCar] = useState([]);
    const [carYear,setcarYear] = useState(new Date().getFullYear());
    const [carMake,setcarMake] = useState();
    const [carModel,setcarModel] = useState();

    const handleAddCar = () =>{
        const newCar = {year : carYear,
                        make : carMake,
                        model : carModel};
        setCar(c =>[...c, newCar]);
        setcarYear(new Date().getFullYear());
        setcarMake("");
        setcarModel("");
    }
    const handleRemoveCar = (index) =>{
            setCar((prev) => prev.filter((_, i) => i !== index));

    }
    const handleYearChange = (event)=>{
            setcarYear(event.target.value)
    }
    const handleMakeChange = (event) =>{
             setcarMake(event.target.value)
    }
    const handleModelChange = (event) =>{
             setcarModel(event.target.value)
    }

    return(
        <>
        <h1>Car Lists</h1>
        <ol>
            {car.map((cars,index) => 
                <li key={index} onClick={()=>handleRemoveCar(index)}>
                    {cars.year}
                    {cars.make}
                    {cars.model}
                </li>)
            }
        </ol>
        <input type='number' placeholder='Enter year' value={carYear} onChange={handleYearChange} /><br/>
        <input type='text' placeholder='Enter Make' value={carMake} onChange={handleMakeChange}/><br/>
        <input type='text' placeholder='Enter Model' value={carModel} onChange={handleModelChange}/><br/>
        <button onClick={handleAddCar}>Add to List</button>
        </>
    );
}

export default MyComponent