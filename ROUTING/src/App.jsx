import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Detail } from "./pages/Detail";

function App() {

  return(
 <BrowserRouter>
    
     <Navbar/>
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/details" element={<Detail/>}/>
    </Routes>

    
    </BrowserRouter>
    
  )
  
}

export default App
