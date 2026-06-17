import { Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import AboutUs from "./Components/AboutUs";
import Navbar from "./Components/Navbar";
import Student from "./Components/Student";
function App(){
  return(<>
     <Navbar/>
     <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
       <Route path="/student/:guys" element={<Student />} />

     </Routes>
  
  </>)
}

export default App;