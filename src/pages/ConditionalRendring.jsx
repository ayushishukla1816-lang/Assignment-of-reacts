// Part A: Conditional Rendering (20 Marks) *Q1. Login Status (5 Marks)* Create a React component that displays *"Welcome User!"* when the user is logged in and
//  *"Please Login"* when the user is logged out. Use conditional rendering.

// import { useState } from "react" 

// const ConditionalRendring = () => {
//     const[isLogged,setIsLogged]=useState(false)
//   return (
//     <div>
//      <h1> {isLogged ?"welcome user":"pls login "} </h1> 
//      <button onClick={()=>setIsLogged(true)}>Login</button>
//      <button onClick={()=>setIsLogged(false)}>Logout</button>
//     </div>
    
//   )
// }

// export default ConditionalRendring




// Q2. Show and Hide Message (5 Marks)* Create a button that toggles a message
//  between visible and hidden. Display *"Hello, React!"* when the message is visible.

// import React, { useState } from 'react'

// const ConditionalRendring = () => {
//     const[message,setMessage]=useState(true)
//   return (
//     <div>
//       <h1>{message?"hello react!":""}</h1>
//       <button onClick={()=>setMessage(true)}>show</button>
//       <button onClick={()=>setMessage(!true)}>hide</button>
//     </div>
//   )
// }

// export default ConditionalRendring




// Q3. Pass or Fail (5 Marks)* Create a React component that stores a student's marks.
//  If marks are 40 or above, display *"Pass"; otherwise, display *"Fail"*.


// import React, { useState } from 'react'

// const ConditionalRendring = () => {
// const[marks,setMarks]=useState(30)
//   return (
//     <div>
//       <p>marks {marks} </p>
//     <h1>  {marks>40?"pass":"fail"}</h1> 
//     </div>
//   )
// }

// export default ConditionalRendring




// que-4 Loading Status (5 Marks)* Create a component that displays *"Loading..."* initially. After clicking a button,
//  change the status to *"Data Loaded Successfully!"* using conditional rendering. ### Part B: List Rendering (20 Marks) 
  // import React, { useState } from 'react'
  
  // const ConditionalRendring = () => {
  //   const[loading,setLoading]=useState(!true)
  //   return (
  //     <div>
  //       <button onClick={()=>setLoading(true)}>click

  //       </button>
  //       <h1>{loading?"loading...":"Loading data successfully"}</h1>
  //     </div>
  //   )
  // }
  
  // export default ConditionalRendring
  


// Q5. Display Student Names (5 Marks)* Create an array containing five student names.
//  Use the map() method to display all names in an unordered list.

// import React from 'react'

// const ConditionalRendring = () => {
//  const Students=["ayushi","amrinder","anita","anjali","chalak"]
//   return (
//     <div>
      
//       {Students.map((s)=>(
//       <ul><li>{s}</li></ul>
//       ))}
//     </div>
//   )
// }

// export default ConditionalRendring




// 6. Product List (5 Marks)* Create an array of five products.
//  Each product should contain an ID, name, and price. Use map() to display the product name and price. 
// import React from 'react'

// const ConditionalRendring = () => {
//    const product=[{
//        "id":1,
//        "name":"saree",
//        "price":500,
//    },
//    {
//     "id":2,
//        "name":"heels",
//        "price":400,
//    },
//    {
//     "id":3,
//        "name":"Fashwash",
//        "price":450,
//    },
//    {
//     "id":4,
//        "name":"comb",
//        "price":50,
//    },
//    {
//     "id":5,
//        "name":"cream",
//        "price":150,
//    }


//   ]
//   return (
//     <div>
//         {product.map((p)=>(<h1 key={p.id}>{p.name}-{p.price}</h1>))}
      
//     </div>
//   )
// }

// export default ConditionalRendring


//que-7  Employee List (5 Marks)* Create an array of at least five employees, each with an ID, name, and department.
//   Display the employee details using map() and provide a unique key for each item
// import React from 'react'

// const ConditionalRendring = () => {
//   const Employee=[{
//        "id":1,
//        "name":"amrinder",
//        "department":"full stack devloper",
//    },
//    {
//     "id":2,
//        "name":"Ayushi",
//        "department":"backend developer",
//    },
//    {
//     "id":3,
//        "name":"Reshab",
//        "department":"digital marketing",
//    },
//    {
//     "id":4,
//        "name":"Anmol",
//        "department":"socail media manager",
//    },
//    {
//     "id":5,
//        "name":"krishna",
//        "department":"AI developer",
//    }


//   ]
//   return (


//     <div>
//       {Employee.map((e)=>(<h1 key={e.id}>{e.name}-{e.department}</h1>))}
//     </div>
//   )
// }

// export default ConditionalRendring




//  *Q8. Conditional List Rendering (5 Marks)* Create an array of student names and display them using map().
//   If the array is empty, display *"No students available"*. 

import React from 'react'

const ConditionalRendring = () => {
  const student=["ayushi","anita","amrinder","yashi","happy"]
  
  return (
    <div>
       {student.length <= 0 ? "no student found" : (
                    student.map((n) => (
                        <h1>
                            {n}
                        </h1>
                    ))
                )}
    </div>
  )
}

export default ConditionalRendring
