import React,{ useState } from 'react'
import "./style.css"
import svglogo from "../../Primarygreen.svg";
function Navbar() {
  
  const [Active,SetActive]=useState("Home");
  return (
    <div className='Nav'>
      <div className='logo'>
       <img src={svglogo} alt="" width={120}/>
      </div>
      <div className='menu'>
        <div style={Active=="Home"?{cursor:"pointer",fontWeight:"700"}:{cursor:"pointer"}} onClick={()=>SetActive("Home")}>Home</div>
        <div style={Active=="About us"?{cursor:"pointer",fontWeight:"700"}:{cursor:"pointer"}} onClick={()=>SetActive("About us")}>About us</div>
        <div style={Active=="Eligibilty"?{cursor:"pointer",fontWeight:"700"}:{cursor:"pointer"}} onClick={()=>SetActive("Eligibilty")}>Eligibilty</div>
        <div style={Active=="Registration"?{cursor:"pointer",fontWeight:"700"}:{cursor:"pointer"}} onClick={()=>SetActive("Registration")}>Registration</div>
        <div style={Active=="Contact us"?{cursor:"pointer",fontWeight:"700"}:{cursor:"pointer"}} onClick={()=>SetActive("Contact us")}>Contact us</div>
      </div>
      <div className='enroll' style={{cursor:"pointer"}}>Enroll Now</div>
    </div>
  )
}

export default Navbar