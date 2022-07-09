// Code Keypad Component Here
import React from 'react'

const Keypad = () => {

function handleChange () {
  console.log('Entering password...')
}


  return (
    <div>
        <input 
        onChange={handleChange}
        type="password" 
        placeholder="password"></input>
    </div>
  )
}

export default Keypad