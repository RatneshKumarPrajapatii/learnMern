import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const Update_User = () => {
  const Navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { id } = useParams()
  useEffect(() => {
    axios.get(`http://localhost:3000/get_data/${id}`)
      .then((result) => {
        setName(result.data.name)
        setEmail(result.data.email)
        setPassword(result.data.password)
      })
      .catch(err => console.log(err))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:3000/get_user/${id}`,{name,email,password})
    .then((result)=>{
      Navigate("/")
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder='Enter name' />
        <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Enter email' />
        <input type="text" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Enter password' />
        <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default Update_User
