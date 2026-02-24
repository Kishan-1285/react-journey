function List3(props){
    const category = props.category;
   const itemList = props.items;
   const listItems = itemList.map(item => (
  <li key={item.id}>{item.name}: <b>{item.calories}</b></li>
));

                                       


     

   return(
    
    <ol className="listitems">{listItems}</ol>      

   );
}
     
export default List3