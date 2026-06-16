import { useState,useEffect } from "react";

function App(){
  const[users,setUsers] = useState([]);
  const[loading,setLoading] = useState(true);
  const[error,setError] = useState("");

  useEffect(()=>{
      async function getUser(){
        try{
          const response = await fetch("https://jsonplaceholder.typicode.com/users");
          const data = await response.json();
          setUsers(data);
        }catch{
          setError("Error");
        }finally{
          setLoading(false);
        }
        
      }
      getUser();

  },[])
  if(loading==true){
    return <h1>Loading</h1>
  }
  if(error){
    return <h1>{error}</h1>
  }
  return(<>
        
     {users.map((user)=>(<h1 key={user.id}>{user.name}</h1>))}
  </>);
}

export default App