import Header from "./Header";
import Student from "./Student";
function App(){
  return(
   <>
    <Header/>
    <Student name="kishan" age={20} gender="Male"/>
    <Student name="Gokul" age={9} />
    <Student/>
   </>
  );

}


export default App