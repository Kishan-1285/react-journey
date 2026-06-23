import React, { useState } from 'react'
import axios from 'axios'
const Login = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        dept:"",
    });

    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await axios.post(
                  "https://jsonplaceholder.typicode.com/users",
                 formData
            )
            console.log(response.data)
        }catch(error){
               console.log(error)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input value={formData.name} type='text' name='name' onChange={handleChange} />

                <br /><br />

                <input value={formData.email} type='email' name='email' onChange={handleChange} />

                <br/><br/>

                <input type='text' value={formData.dept} name='dept' onChange={handleChange}/>

                <button type='submit'>
                    Submit
                </button>
            </form>
        </>
    )
}

export default Login