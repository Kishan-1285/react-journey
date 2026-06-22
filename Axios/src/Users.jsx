import React,{ useState,useEffect } from 'react';
import axios from "axios";

const Users = () => {
    const[users,setUsers] = useState([]);
    const[error,setError] = useState("");
    const[loading,setLoading] = useState(true);
    useEffect(()=>{
           async function getUsers(){
             try{
                const response = await axios.get(
                  "https://jsonplaceholder.typicode.com/users"
                    )
                setUsers(response.data);
             }catch{
                setError("Failed to fetch data");
             }finally{
                setLoading(false)
             }
           }
           getUsers();
    },[])
    if (loading) {
   return <h1>Loading</h1>
}

if (error) {
   return <h1>{error}</h1>
}
  return (
    <>
     {users.map((user)=>{
         return (
             <h1 key={user.id}>{user.name}</h1>
         );
     })}
    </>
  )
}

export default Users