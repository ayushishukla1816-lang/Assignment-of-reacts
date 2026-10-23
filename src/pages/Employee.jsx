import React from 'react'

const Employee = ({name,jobrole,salary}) => {
  return (
    <div>
      <h1>Name:- {name}</h1>
      <h2>Jobrole:- {jobrole}</h2>
      <h3>Salary:- {salary}</h3>
    </div>
  )
}

export default Employee
