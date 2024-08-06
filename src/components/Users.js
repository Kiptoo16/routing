import React from 'react'
import { Link } from 'react-router-dom'


function Users({user}) {
  return (
    <div>
      <div className="user">
    <h1>Name: {user.name}</h1>
   <h3>Username:{user.name}</h3>
   <button><Link to={`/users/${user.id}`}>View More...</Link></button>
   </div> 
    </div>
  )
}

export default Users
