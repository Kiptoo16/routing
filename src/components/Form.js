import React, {useState} from 'react'

function Form({users, setUsers}) {

    const[formData, setFormData] = useState({
        name : "",
        username : ""
    })

const handleOnChange =(event)=>{
    const name = event.target.name
    const value = event.target.value
    //updating status
    setFormData({
        ...formData, [name]: value
    })
    }
 
    const handleSubmit =(e)=> {
        e.preventDefault()

        fetch("http://localhost:3000/users", { 
            method : "POST",
            headers : {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body : JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(user => setUsers([user,...users]));

setFormData({
    name: "",
    username :""
})


    }  

  return (
    <div className='form-wrapper'>

  <div>
    <h1>Post User</h1>
    </div>

    <form onSubmit={handleSubmit}> 
    <div>
        <input type='text' name='name' placeholder='Enter Name' value={formData.name} onChange={handleOnChange}/> 
    </div>

    <div>
        <input type='text' name='username' placeholder='Enter username' value={formData.username} onChange={handleOnChange}/> 
    </div>

    <div>
        <input type='submit' value="submit"/>
    </div>
    </form>
    </div>
  )
}

export default Form
