import React, { useState } from 'react'
function Themetoggle(){
const[darkMode,setDarkMode]=useState(false);
const Theme = {
    backgroundColor:darkMode?"#222":"#ffffff",
    color:darkMode?"#ffffff":"#222",
    padding:"30px",
    borderRadius:"10px"

}
  return (
    <div className="box" style={Theme}>
      <h1>Light and dark mode </h1>
      <p>Current theme:{darkMode?"darkMode":"lightMode"}</p>
      <button onClick={()=>setDarkMode(!darkMode)}>{darkMode?"switch darkmode":"switch lightmode"}</button>
    </div>
  )
}

export default Themetoggle
