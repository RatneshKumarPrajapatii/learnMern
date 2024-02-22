import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const CreateUser = () => {
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const Navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
    
        // Make a POST request to the server with user data
        axios.post("http://localhost:3000/postUser", { name, email, password })
            .then((result) => {
                // for after form submission the input field shuld clear
                setName("");
                setEmail("");
                setPassword("");
                Navigate("/")
            })
            .catch((err) => console.log(err));
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter name' />
                <input  value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter email' />
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter password' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default CreateUser
