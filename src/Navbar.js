import React from 'react'

const Navbar = () => {
  return (
   <div className="navbar">
    <div className="container flex">
      <div className="logo">Shriniket</div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Features</a></li>
          <li><a href="/">Docs</a></li>
        </ul>
      </nav>
    </div>
   </div>
  )
}

export default Navbar