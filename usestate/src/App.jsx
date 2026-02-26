import Mycomponent from "./Mycomponent.jsx";
import Counter from './Counter.jsx';
function App() {
   const marks =["eng","mat","sci","ss"];
   
 return(
    <>
     <Mycomponent/>
      {marks.map((sub) => (
                <Counter key={sub} subject={sub} />
            ))}
      
   </>
 );
}

export default App
