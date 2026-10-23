import React from 'react'
// //direct
// const UserPage = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.email}</h1>
//     </div>
//   )
// }

// export default UserPage



//data destructure
import React from 'react'

const UserPage = ({name,age,email}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{email }</h1>
    </div>
  )
}

export default UserPage

