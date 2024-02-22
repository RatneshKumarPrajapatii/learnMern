import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from "axios"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const Navigate = useNavigate()
    const [userInfo, setUserInfo] = useState([
        {
            name: "ratnesh",
            email: "ratnesh@gmail.com",
            password: "12443"
        }
    ])

    useEffect(()=>{
        axios.get("http://localhost:3000/getUser")
        .then((result)=>{
            setUserInfo(result.data)
        })
        .catch(err =>console.log(err))
    },[])
    const handleDelete=(id)=>{
      axios.delete(`http://localhost:3000/delete_User/${id}`)
      .then((result)=>{
        window.location.reload()
      })
      .catch(err => console.log(err))
    }
    return (
        <>
        <Navbar/>
        <h1>Hello Coders! ToDo mern pro please add your own style </h1>
        {
            userInfo.map((info,i)=>{
                return <div key={i}>
                    name : {info.name} <br/>
                    email : {info.email} <br/>
                    <button><Link to={`/update/${info._id}`}>Update</Link></button>
                    <button onClick={(e)=>handleDelete(info._id)}>Delete</button>
                    <br /> <br />  <br />
                </div>
            })
        }
        </>
    )
}

export default Home
