import {useRef} from 'react'

function Task1() {
    const input =useRef();
    const display =()=>{
        input.current.focus();
    }

  return (
    <>
    <input ref={input} />
    <button id="but" onClick={display}>Click</button>
    </>
  )
}

export default Task1