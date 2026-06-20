import React from 'react'
import { useContext } from 'react';
import { valueContext } from './App';
function Profile() {
    const profile = useContext(valueContext);
  return (
    <>
     <h3>Name: {profile.name}</h3>
     <h3>Role: {profile.role}</h3>
    </>
  )
}

export default Profile