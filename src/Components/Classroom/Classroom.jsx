import React from 'react'
import "./style.css"
import im1 from "../../im1.jpg";
import { SlMouse } from "react-icons/sl";
import { FaPlay } from "react-icons/fa";
function Classroom() {
  return (
    <div className='Classroom-container' style={{width:"100%",paddingTop:"34.5px",paddingBottom:"34.5px"}}>
        <div className='Image3-container'>
        <div className='Image3'>
            <img src={im1}  alt="" />
            
        </div>
        <div className='content3-container'>
            <div className='play-video'>
            <img src={im1}  alt="" />
            <div className='play-video-container'>
                <div className='play-video-contents'>
                    <div className='play-video-content1'>Play Video</div>
                    <div className='play-video-content2'>See how we teach our students</div>
                </div>
             
            </div>
            <div className='play-circle'>
            <FaPlay />
            <div className="yellow-circle1"></div>
        <div className="yellow-circle2"></div>
            </div>
            </div>
            <div className='content3-container-data'>
                <div className='content3-container-data-header'>Embarking on our linguistic journey</div>
                
                <div className='content3-container-para'>
                <p>Embarking on a linguistic journey, we delve into language education, guiding students through exploration and proficiency.
                    </p>
                <p>Our expert instructors use innovative methods, unraveling language nuances, fostering deep understanding, and empowering mastery.
                </p> 
                </div>
                <div className='enroll' style={{cursor:"pointer"}}>Enroll now</div>
            </div>
        </div>
        </div>
       
        
    </div>
  )
}

export default Classroom