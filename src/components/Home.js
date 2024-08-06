import React, {useEffect, useState} from 'react'
import Users from './Users'
import Form from './Form'


function Home() {
const [users, setUsers] = useState([])

useEffect(() =>{
  fetch("http://localhost:3000/users")
  .then(res => res.json())
  .then(users => setUsers(users))
  .catch(error => console.log(error))}, [])

const displayUsers =users.map(user =>  <Users key = {user.id} user={user}/>)

  return (
    <div className="users">
      <Form users={users} setUsers={setUsers}/>
    {displayUsers}
    </div>
  )
}

export default Home
