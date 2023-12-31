import React from "react";
import "./style.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
function Contact() {
  return (
    <div className="Contact-container">
      <div className="Contact">
        <div className="Contact-form">
          <div className="form-container">
            <div className="form-header-container">
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
          <div className="detail-conatiner">
            <div className="phone">
            <FaPhoneAlt style={{height:"20px",width:"20px"}}/>
                <div className="phone-content-container">
                    <div className="phone-content-header">PHONE</div>
                    <div className="phone-content">+919742753113</div>
                </div>
            </div>
            <div className="fax">
            <IoLogoWhatsapp style={{height:"20px",width:"20px"}}/>
                <div className="phone-content-container">
                    <div className="phone-content-header">WHATSAPP</div>
                    <div className="phone-content"> +918310389908</div>
                </div>
            </div>
            <div className="email">
            <MdEmail style={{height:"20px",width:"20px"}}/>
                <div className="phone-content-container">
                    <div className="phone-content-header">EMAIL</div>
                    <div className="phone-content">support@ssbbullseye.com</div>
                </div>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.77824483394!2d2.264634092871859!3d48.85893843515108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sin!4v1704005365663!5m2!1sen!2sin"
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
  );
}

export default Contact;
