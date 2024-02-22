import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/create">create</Link>
      <Link to="/update">update</Link>
    </div>
  )
}

export default Navbar
