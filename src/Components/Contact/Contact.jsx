import React from "react";
import "./style.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
function Contact() {
  return (
    <>
 
    <div className="Contact-container"  id="contact">
      
      <div className="mobile-contact">
   
        <div className="Contact-form">
          <div className="form-container">
            <div className="form-header-container">
              <div className="form-header-title">
                Get in <span>Touch</span>
              </div>
              <div className="hello" >
                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
                leo molestie vel, ornare non id blandit netus.
              </div>
            </div>
            <div >
                <form action="" className="form-input-container">
                <input type="text"  className="form-input star" placeholder="Name*" required/>
                <input type="text"  className="form-input" placeholder="Email"/>
                <input type="text"  className="form-input star" placeholder="Phone Number*" required/>
                <select name="select-dropdown" id="select-dropdown" className="form-input">
                    <option value="0" className="option">How did you find us?</option>
                    <option value="1" className="option">Twitter</option>
                </select>
                <textarea style={{height:"70px",resize:"none"}} className="form-input" placeholder="Question*"/>
                <input type="submit" value="Submit"/>
                </form>
            </div>
         
        </div>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.267657021509!2d77.75945747454728!3d13.018619913846758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0f0cd3377371%3A0x7204c157f6ec1532!2sSSBBullsEye!5e0!3m2!1sen!2sin!4v1704266595700!5m2!1sen!2sin"
            className="map-content"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
      </div>
      </div>
      <div className="Contact" >
        <div className="Contact-form">
          <div className="form-container">
            <div className="form-header-container"  >
              <div className="form-header-title">
                Get in <span>Touch</span>
              </div>
              <div className="hello">
                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
                leo molestie vel, ornare non id blandit netus.
              </div>
            </div>
            <div >
                <form action="" className="form-input-container">
                <input type="text"  className="form-input star" placeholder="Name*" required/>
                <input type="text"  className="form-input" placeholder="Email"/>
                <input type="text"  className="form-input star" placeholder="Phone Number*" required/>
                <select name="select-dropdown" id="select-dropdown" className="form-input">
                    <option value="0" className="option">How did you find us?</option>
                    <option value="1" className="option">Twitter</option>
                </select>
                <textarea style={{height:"70px",resize:"none"}} className="form-input" placeholder="Question*"/>
                <input type="submit" value="Submit"/>
                </form>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.267657021509!2d77.75945747454728!3d13.018619913846758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0f0cd3377371%3A0x7204c157f6ec1532!2sSSBBullsEye!5e0!3m2!1sen!2sin!4v1704266595700!5m2!1sen!2sin"
            className="map-content"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="color-box"></div>
    </div>
    </>
  );
}

export default Contact;
