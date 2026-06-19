import { useState } from 'react';
import Parent from './Components.jsx/Parent';
import { domainContext } from './domainContext';

const App=()=> {
  const[domain,setDomain] = useState("FullStack");
  const onChange =()=>{
    setDomain((dom)=>(dom==="FullStack"?"MERN":"FullStack"))
  }
  return (
    <>
    <domainContext.Provider value={domain}>
      <Parent/>
      <button onClick={onChange}>Click</button>
    </domainContext.Provider>
    </>
  )
}

export default App
