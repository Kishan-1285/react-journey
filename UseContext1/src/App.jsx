import Footer from "./Footer";
import Navbar from "./Navbar";
import Profile from "./Profile";
import { useState,createContext } from 'react'

export const valueContext = createContext();
function App(){
    const[val,setVal] = useState({name:"kishan",role:"Frontend Developer"})
  return(
    <valueContext.Provider value={val}>
      {/* <h1>{value.name}</h1> */}
      <Navbar/>
      <Profile/>
      <Footer/>
     </valueContext.Provider>
  )
}

export default App