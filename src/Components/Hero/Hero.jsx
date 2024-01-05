import React, { useEffect, useState } from "react";
import "./style.css";
import { FaPlay } from "react-icons/fa6";
import im1 from "../../im1.jpg";
import im2 from "../../im2.jpg"
import im3 from "../../im3.jpg";
import im4 from "../../im4.avif"
import Enroll from "../../Pages/Enroll";
const imagesArray = [im1, im3,im4];
function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesArray.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero" id="home">
      
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
        <div className="Image-container1">
        {imagesArray.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={`image test ${index === currentImageIndex ? "visible" : "hidden"}`}
          />
        ))}
        </div>
      </div>
      <div className="para-container">
            <p className="para">
              At SSB BullsEye, we excel in guiding candidates toward success in
              SSB & NDA exams. With experienced coaches and a proven track
              record, our tailored approach ensures comprehensive preparation.
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
              </div>
            </div>
          </div>
      <div className="Image-container2">
        <img src={im2} alt="" className="image" />
      </div>
    </div>
  );
}

export default Hero;
