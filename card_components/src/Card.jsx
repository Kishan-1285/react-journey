function Card({image,title,description}){
  return(
   
   <div className="card">
        <img className="card-img" src={image} alt="profile picture"></img>
        <h2>{title}</h2>
        <p>{description}</p>
   </div>


  );
}

export default Card;