import React, { useState,useEffect } from "react";
import "./style.css";
import svglogo from "../../Primarygreen.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { setActiveLink } from "react-scroll/modules/mixins/scroller";
function Navbar({setenroll,enroll}) {

  const [Active, SetActive] = useState("Home");
  const [check,setcheck]=useState(false);
 const [drop,setdrop]=useState(false);
  const smoothScrollTo = (id, callback) => {
    // Check if the current route is /enroll
   
      // If the current route is already /home, scroll directly
      performScrollTo(id, callback);
      setTimeout(()=>{
        setcheck(false);
      },1000);
  
   
  };

  const performScrollTo = (id, callback) => {
    const settings = {
      duration: 1000,
      easing: {
        outQuint: function (x, t, b, c, d) {
          return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        }
      }
    };

    const node = document.getElementById(id);
    const nodeTop = node.offsetTop-80;
    const nodeHeight = node.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowHeight = window.innerHeight;
    const offset = window.pageYOffset;
    const delta = nodeTop - offset;
    const bottomScrollableY = height - windowHeight;
    const targetY = bottomScrollableY < delta ? bottomScrollableY - (height - nodeTop - nodeHeight + offset) : delta;

    let startTime = Date.now();
    let percentage = 0;

    function step() {
      const elapsed = Date.now() - startTime;

      if (elapsed > settings.duration) {
        clearTimeout(timer);
      }

      percentage = elapsed / settings.duration;

      if (percentage > 1) {
        clearTimeout(timer);

        if (callback) {
          callback();
        }
      } else {
        const yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
        window.scrollTo(0, yScroll);
        timer = setTimeout(step, 10);
      }
    }

    let timer = setTimeout(step, 10);
  };

  useEffect(() => {
    // Optionally, you can handle initial scroll based on URL hash
    const hash = window.location.hash.substring(1);
    if (hash) {
      smoothScrollTo(hash);
    }
  
  }, []);

  const handleScrollTo = (targetId) => {
 setTimeout(()=>{
  smoothScrollTo(targetId);
 },100)
  
  };


  // useEffect(() => {
  //   // Optionally, you can handle initial scroll based on URL hash
  //   const hash = window.location.href.split("#");
  //   console.log(hash[1]);
  //   if (hash) {
  //     handleScrollTo(hash);
  //   }
  // }, []);

  
  return (
    <div className="Nav">
      <div
        className="logo"
        style={{ cursor: "pointer" }}
        onClick={()=>setenroll(false)}
      >
      <img src={svglogo} alt="" width={120} />
    
       
      </div>
      <div className="menu">
        <div
          style={
            Active == "Home"
              ? { cursor: "pointer", fontWeight: "700" }
              : { cursor: "pointer" }
          }
          onClick={() => {
            setenroll(false);
            handleScrollTo('home');
            SetActive("Home");
          }}
        >
            Home
        </div>
        <div
          style={
            Active == "About us"
              ? { cursor: "pointer", fontWeight: "700" }
              : { cursor: "pointer" }
          }
          onClick={() => { setenroll(false);handleScrollTo('about');SetActive("About us")}}
        >
          {" "}
         
            About
         
        </div>
       
        <div
          style={
           Active==="Registration"&& enroll===true
              ? { cursor: "pointer", fontWeight: "700" }
              : { cursor: "pointer" }
          }
          onClick={() => {
            setenroll(true);
            handleScrollTo('enroll');
            SetActive("Registration");
           
          }}
        >
          Registration
        </div>
        <div
          style={
            Active == "Eligibilty"&&drop
              ? { cursor: "pointer", fontWeight: "700",position:"relative" }
              : { cursor: "pointer" ,position:"relative"}
          }
          onClick={() => {SetActive("Eligibilty");setdrop(!drop)}}
          className="eligibilty"
        >
          Eligibilty
          <div className="dropdown" style={  drop?{height:"160px"}:{}}>
            <a href="https://164.100.158.23/how-to-join.htm" className="dropdown-item">Indian Army</a>
            <a href="https://www.joinindiannavy.gov.in/en/entry/entry/eligibilityform" className="dropdown-item">Indian Navy</a>
            <a href="https://afcat.cdac.in/AFCAT/CareerAsPerQualification.html" className="dropdown-item">Indian Air force</a>
          </div>
        </div>
        <div
          style={
            Active == "Contact us"
              ? { cursor: "pointer", fontWeight: "700" }
              : { cursor: "pointer" }
          }
          onClick={() => { setenroll(false);handleScrollTo('contact');SetActive("Contact us")}}
        >
          {" "}
            Contact
       
        </div>
      </div>
      <div
        className="enroll"
        style={{ cursor: "pointer" }}
        onClick={() => {
          SetActive("Registration");
          setenroll(true);
          handleScrollTo('enroll');
        }}
      >
        Enroll Now
      </div>
      <input id="toggle1" type="checkbox" onChange={()=>setcheck(!check)} checked={check}/>
    <label class="hamburger1" for="toggle1" >
      <div class="topi"></div>
      <div class="meat"></div>
      <div class="bottom"></div>
    </label>
    <nav class="menu1">
    <div className="link1"
          style={
            Active == "Home"
              ? { cursor: "pointer", fontWeight: "700", backgroundColor: "#fff",
              color: "#3D9970",
              transition: "all 0.3s ease" }
              : { cursor: "pointer" }
          }
          onClick={() => {
            setenroll(false);
            handleScrollTo('home');
            SetActive("Home");
          }}
        >
            Home
        </div>
        <div className="link1"
          style={
            Active == "About us"
              ? { cursor: "pointer", fontWeight: "700", backgroundColor: "#fff",
              color: "#3D9970",
              transition: "all 0.3s ease" }
              : { cursor: "pointer" }
          }
          onClick={() => { setenroll(false);handleScrollTo('about');SetActive("About us")}}
        >
          {" "}
         
            About
         
        </div>
       
        <div className="link1"
          style={
           Active==="Registration"&& enroll===true
              ? { cursor: "pointer", fontWeight: "700", backgroundColor: "#fff",
              color: "#3D9970",
              transition: "all 0.3s ease" }
              : { cursor: "pointer" }
          }
          onClick={() => {
            setenroll(true);
            handleScrollTo('enroll');
            SetActive("Registration");
           
          }}
        >
          Registration
        </div>
        <div  className="link1"
          style={
            Active == "Eligibilty"
              ? { cursor: "pointer", fontWeight: "700",position:"relative", backgroundColor: "#fff",
              color: "#3D9970",
              transition: "all 0.3s ease" }
              : { cursor: "pointer" ,position:"relative"}
          }
          onClick={() => {SetActive("Eligibilty")}}
        
        >
          Eligibilty
          
        </div>
        <a className="mobile-drop" style={ Active == "Eligibilty"?{}:{display:"none"}} href="https://164.100.158.23/how-to-join.htm" >Indian Army</a>
            <a className="mobile-drop" style={ Active == "Eligibilty"?{}:{display:"none"}} href="https://www.joinindiannavy.gov.in/en/entry/entry/eligibilityform" >Indian Navy</a>
            <a className="mobile-drop" style={ Active == "Eligibilty"?{}:{display:"none"}} href="https://afcat.cdac.in/AFCAT/CareerAsPerQualification.html">Indian Air force</a>
        <div className="link1"
          style={
            Active == "Contact us"
              ?  { cursor: "pointer", fontWeight: "700", backgroundColor: "#fff",
              color: "#3D9970",
              transition: "all 0.3s ease" }
              : { cursor: "pointer" }
          }
          onClick={() => { setenroll(false);handleScrollTo('contact');SetActive("Contact us")}}
        >
          {" "}
            Contact
       
        </div>
 
      <div 
        className="enroll1"
        style={{ cursor: "pointer" }}
        onClick={() => {
          SetActive("Registration");
          setenroll(true);
          handleScrollTo('enroll');
        }}
      >
        Enroll Now
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
