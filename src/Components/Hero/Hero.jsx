import React from "react";
import "./style.css";
import Lottie from "react-lottie";
import Anidat from "../../Anidat.json";
import { FaPlay } from "react-icons/fa6";
function Hero() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Anidat,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="hero">
      <div className="top">
        <div className="Hero-header-container">
          <div className="Hero-header">
            <div className="Hero-header-content">
              Master Your SSB & NDA Exams!
            </div>
          </div>
          <div className="Top-footer">
            Expert Coaching for Success in Defence Entrance Exams
          </div>
        </div>
        <div className="Image-container1"></div>
      </div>
      <div className="para-container">
        <p className="para">
          At [Tutoring Service Name], we excel in guiding candidates toward
          success in SSB & NDA exams. With experienced coaches and a proven
          track record, our tailored approach ensures comprehensive preparation.
          We equip you with skills and confidence needed to conquer these
          rigorous assessments.
        </p>
        <div className="get-container">
          <div className="getintouch">Get in touch</div>
          <div className="watch-container">
              <div className="watch-video">
               <div className="play-icon">
                <FaPlay />
              </div>
              <div>Watch Our Video</div>
               </div>
                 <div  className="arrow">
            <div  className="lottie"> <Lottie options={defaultOptions} height={100} width={150} /></div> 
            <div className="Explore-circle">Explore all modules</div>
                </div>
               
                 </div>
        </div>
      </div>
      <div className="Image-container2"></div>
    </div>
  );
}

export default Hero;
