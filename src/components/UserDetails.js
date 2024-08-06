import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const [user, setUser] =useState({})
    
const {id} = useParams()
//console.log(params);

useEffect(()=>{
fetch(`http://localhost:3000/users/${id}`)
.then(res => res.json())
.then(user => {setUser(user)}
)
},[id])

 if(!user.name){
    return <div>Loading...</div>
 }


  return (
    <div>
        <h1>UserDetails</h1>
        <h3>Name: {user.name}</h3>
        <h3>Username: {user.username}</h3>
        <h3>Phone: {user.phone}</h3>
        <h3>Email: {user.email}</h3>
        <h3>Company: {user.company.name}</h3>
 </div>
        )
}

export default UserDetails
