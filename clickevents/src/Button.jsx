function Button(){

     const handleclick =(e)=> e.target.textContent="ouch!!";
  //  let count = 0;
    // const handleclick =(name)=> {
    //     if(count<3){
    //         count++;
    //         console.log(`you ${name} clicked me ${count}`);
    //     }else{
    //         console.log(`${name} dont touch me`);
    //     }
    // };
    //  const handleclick2 =(name)=> console.log(`${name} don't touch me`);
        return(
            <>
             <button onClick={(e) => handleclick(e)}>Click me</button>
            </>
        );

}

export default Button;