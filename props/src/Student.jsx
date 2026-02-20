function Student(bhaii){
   return( 
     <div className="Box">
         <p>Name:{bhaii.name}</p>
         <p>Age: {bhaii.age}</p>
         <p>Student:{bhaii.isStudent ? "Yes" :"No"}</p>
     </div>
    );
}

export default Student