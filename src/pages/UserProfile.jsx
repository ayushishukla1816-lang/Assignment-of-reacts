import React from 'react'

const UserProfile = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
       <img src={props.image} alt="" />
        <h1>{props.city}</h1>
    </div>
  )
}

export default UserProfile