import Student from "./Student.jsx"

function App() {
    return(
    <>
       <Student name="Gokul" age={20} isStudent={false}/>
        <Student name="Guru" age={21} isStudent={true}/>
         <Student name="Ashwin" age={22} isStudent={true}/>
    </>
    );
   
}

export default App
