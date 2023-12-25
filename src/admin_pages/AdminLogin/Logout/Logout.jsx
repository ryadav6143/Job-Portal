import React from 'react'
import "./Logout.css"


function Logout({handleLogout}) {
  
  return (
    <div>
        <button onClick={handleLogout}>LogOut</button>
    </div>
  )
}

export default Logout