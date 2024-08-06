import React, {useEffect, useState} from 'react'
import Users from './Users'
import Form from './Form'


function Home ({users}) { 


const displayUsers =users.map(user =>  <Users key = {user.id} user={user}/>)

  return (
    <div className="users">
    {displayUsers}
    </div>
  )
}

export default Home
