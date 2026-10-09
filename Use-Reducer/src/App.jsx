import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);

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