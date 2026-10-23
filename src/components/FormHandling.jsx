import React, { useState } from 'react'

    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

const FormHandling = () => {
  return (
    <div>
      <input type="text" placeholder='Enter name' />
      <input type="text" placeholder='Enter email' />
      <input type="text" placeholder='Enter password' />
    </div>
  )
}

export default FormHandling
