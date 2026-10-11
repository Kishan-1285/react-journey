import React, { useState, useReducer} from 'react'

const App = () => {
  function reducer(state,action){
    switch (action.type){
      case "INCREMENT":
        return {count : state.count+1}
      case "DECREMENT":
        return {count : state.count-1}
      default :
        return state
    }

  } 
  const [count, setCount] = useState(0);
  const [state , dispatch] = useReducer(reducer , {count:0})

  const decrement = () => {
    // setCount(c => c - 1);
    dispatch({type:"DECREMENT"})
  }

  const increament = () => {
    // setCount(c => c + 1);
    dispatch({type:"INCREMENT"})
  }
  return (
    <>
      <button onClick={decrement}>-</button>
      <p>{state.count}</p>
      <button onClick={increament}>+</button>
    </>
  )
}

export default App

/*
here when the use click the button , the onclick button call the increment function . 
inside that function the dispatch function sends an action({type: "INCREMENT"}) to the reducer .
the reducer recieves two arguments: the current state and the action sent by the dispatch
it checks the action type is "increment" the reducer calculates state.count+1 and returns the new state.

React receives this returned state, updates the component's state and re-renders the component.
 Finally, the updated count is displayed in the UI.
*/