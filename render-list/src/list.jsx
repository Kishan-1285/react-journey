function List(){
   const fruits =[{id:1,name:"apple",calories:56},
                  {id:2,name:"mango",calories:106},
                  {id:3,name:"banana",calories:159},
                  {id:4,name:"orange",calories:123},
                 {id:5,name:"grapes",calories:37}]

   const fruitlist = fruits.map(fruit=><li key={fruits.id}>{fruit.name}:{fruit.calories}</li>)

   return(<ol>{fruitlist}</ol>);
}
     
export default List