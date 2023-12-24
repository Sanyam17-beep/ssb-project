import React from 'react'
import "./style.css"
function Navbar() {
  return (
    <div className='Nav'>
      <div className='logo'>logo</div>
      <div className='menu'>
        <div style={{cursor:"pointer"}}>Home</div>
        <div style={{cursor:"pointer"}}>About us</div>
        <div style={{cursor:"pointer"}}>Modules</div>
        <div style={{cursor:"pointer"}}>Eligibilty</div>
        <div style={{cursor:"pointer"}}>Registration</div>
        <div style={{cursor:"pointer"}}>Contact us</div>
      </div>
      <div className='enroll' style={{cursor:"pointer"}}>Enroll Now</div>
    </div>
  )
}

export default Navbar