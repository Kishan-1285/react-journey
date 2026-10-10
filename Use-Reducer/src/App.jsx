import React, { useState, useReducer} from 'react'

const App = () => {
  // const reducerFunc = {
  //   return
  // }
  const [count, setCount] = useState(0);
  // const [state , dispatch] = 

  const decrement = () => {
    setCount(c => c - 1);
  }

  const increament = () => {
    setCount(c => c + 1);
  }
  return (
    <>
      <button onClick={decrement}>-</button>
      <p>{count}</p>
      <button onClick={increament}>+</button>
    </>
  )
}

export default App