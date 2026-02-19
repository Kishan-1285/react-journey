function Button(){
   const styles = {
      
  backgroundColor: "rgb(0, 255, 255)",
  color: "rgb(0, 0, 0)",
  border: "none",
  borderRadius:"5px",
  cursor: "pointer",
  boxShadow: "rgb(0, 255, 255)",
   }
   return (
      <>
    <button style={styles}>Touch me</button>
    <button className="Button3">punch me</button>
    </>
   );
}

export default Button