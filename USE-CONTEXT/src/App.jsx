import { useState } from "react";
import { createContext } from "react";
import Navbar from "./Navbar";
import Home from "./Home";

export const themeContext = createContext();

function App(){

  const[theme,setTheme] = useState("light");
 

  return(

    <themeContext.Provider value={{theme,setTheme}}>
         <Navbar/>
         <Home/>
    </themeContext.Provider>

  )
}

export default App;