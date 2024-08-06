import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const [user, setUsers] =useState({})
    
const params = useParams()
console.log(params);



  return (
    <div>
      
    </div>
  )
}

export default UserDetails
