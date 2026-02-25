import List from './list2.jsx'
import Lists from './list3.jsx'
function App() {

      const fruits =[{id:1,name:"apple",calories:56},
                     {id:2,name:"mango",calories:106},
                     {id:3,name:"banana",calories:159},
                     {id:4,name:"orange",calories:123},
                     {id:5,name:"grapes",calories:37}];
      const vegetables =[{id:6,name:"carrot",calories:51},
                         {id:7,name:"cucumber",calories:186},
                         {id:8,name:"drumstick",calories:122},
                         {id:9,name:"potato",calories:163},
                         {id:10,name:"ladiesfinger",calories:102}];
                         
  return(
    <>
      <List item={fruits} category="fruits"/>
      <hr></hr>
      <h2 className="fruits">fruits</h2>
      <Lists items={fruits} category="fruits" />
      <h2 className='veggies'>veggies</h2>
       <Lists items={vegetables} category="veggies" />

      </>
  );
}

export default App
