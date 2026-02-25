function ProfilePicture(){
     const imgurl = './src/assets/image.png';
     const handleClick3 = () => console.log("clicked ")
    return(

      <>
           <img onClick= {handleClick3} className="gokul" src = {imgurl}></img>
      </>

    );

}

export default ProfilePicture