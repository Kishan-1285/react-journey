import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Users = () => {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: ""
    });
    // console.log(formData)
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function getUsers() {
            try {
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/users/2'
                )
                setFormData(response.data);
            } catch {
                setError("Failed to fetch data");
            } finally {
                setLoading(false)
            }
        }
        getUsers();
    }, [])
    if (loading) {
        return <h1>Loading</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async(e) => {
           e.preventDefault();
           try{
            const response = await axios.put(
                'https://jsonplaceholder.typicode.com/users/2',
                formData
            )
            console.log(response.data)
           }catch{
                console.log(error);
           }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={formData.name} name='name' onChange={handleChange} /><br /><br />
                <input type='email' value={formData.email} name='email' onChange={handleChange} /><br /><br />
                <input type='username' value={formData.username} name='username' onChange={handleChange} /><br /><br />
                <button type='submit'> Submit</button>
            </form>
        </div>
    )
}

export default Users