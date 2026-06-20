import React from 'react'
import {valueContext} from './App.jsx'
import { useContext} from 'react'

function Footer() {
  const footer = useContext(valueContext);
  return (
    <h1>Logged in as {footer.name}</h1>
  )
}

export default Footer