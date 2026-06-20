import React from 'react'
import {valueContext} from './App.jsx'
import {useContext} from 'react';

function Navbar() {
  const data = useContext(valueContext);
  return (
    <> <h1>Welcome {data.name}</h1></>
  )
}

export default Navbar