function List(){
   const fruits =[{id:1,name:"apple",calories:56},
                  {id:2,name:"mango",calories:106},
                  {id:3,name:"banana",calories:159},
                  {id:4,name:"orange",calories:123},
                 {id:5,name:"grapes",calories:37}]


      fruits.sort((a,b)=>a.name.localeCompare(b.name));
    //fruits.sort((a,b)=>b.name.localeCompare(a.name));

    const lowCalFruits =  fruits.filter(fruit=>fruit.calories<100);
    const highCalFruits = fruits.filter(fruit=>fruit.calories>=100);

   const fruitlist = lowCalFruits.map(lowCalFruit=><li key={lowCalFruit.id}>{lowCalFruit.name}:&nbsp;
                                            <b>{lowCalFruit.calories}</b></li>)
   const fruitlist_2 = highCalFruits.map(highCalFruit=><li key={highCalFruit.id}>{highCalFruit.name}:&nbsp;
                                            <b>{highCalFruit.calories}</b></li>)
   return(
       <>
       <h2>lowcalorie-fruits</h2>
       <ol className="fruits">{fruitlist}</ol>
       <h2>highcalorie-fruits</h2>
       <ol>{fruitlist_2}</ol>
       </>
          
   );
}
     
export default List