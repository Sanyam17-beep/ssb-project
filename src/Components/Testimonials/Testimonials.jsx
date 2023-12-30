import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import im1 from "../../im1.jpg";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaPlay } from "react-icons/fa";
import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Testimonials() {
  return (
    < div className='testimonial-container'>
        <div className='heading'>What Our Student Say</div>
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper testimonial"
      >
        <SwiperSlide className='slide swiper-slide'> <div className='black-box'>
        <img src={im1}  alt="" />
        <div className='black-box-circle' onClick={()=>{window.location.href="https://www.ssbbullseye.com/videos/shaksham.mp4"}}>
        <FaPlay />
            <div className="yellow-circle3"></div>
        <div className="yellow-circle4"></div>
        </div>
        </div>
            <p>
            “Embarking on a linguistic journey, we delve into language education, guiding students through exploration and proficiency.”
            </p>
            <i class="bx bxs-quote-alt-left quote-icon"></i>
            <div class="details">
              <span class="name">Marnie Lotter</span>
              <span class="job">Air Force(Flying Batch)</span>
            </div></SwiperSlide>
        <SwiperSlide className='swiper-slide slide'> <div className='black-box'>
        <img src={im1}  alt="" />
        <div className='black-box-circle' onClick={()=>{window.location.href="https://www.ssbbullseye.com/videos/shlok.mp4"}}>
        <FaPlay />
            <div className="yellow-circle3"></div>
        <div className="yellow-circle4"></div>
        </div>
        </div>
            <p>
            “Embarking on a linguistic journey, we delve into language education, guiding students through exploration and proficiency.”
            </p>
            <i class="bx bxs-quote-alt-left quote-icon"></i>
            <div class="details">
              <span class="name">Marnie Lotter</span>
              <span class="job">Air Force(Flying Batch)</span>
            </div></SwiperSlide>
        <SwiperSlide className='swiper-slide slide'> <div className='black-box'>
        <img src={im1}  alt="" />
        <div className='black-box-circle' onClick={()=>{window.location.href="https://www.ssbbullseye.com/videos/aryaman.mp4"}}>
        <FaPlay />
            <div className="yellow-circle3"></div>
        <div className="yellow-circle4"></div>
        </div>
        </div>
            <p>
            “Embarking on a linguistic journey, we delve into language education, guiding students through exploration and proficiency.”
            </p>
            <i class="bx bxs-quote-alt-left quote-icon"></i>
            <div class="details">
              <span class="name">Marnie Lotter</span>
              <span class="job">Air Force(Flying Batch)</span>
            </div></SwiperSlide>
       
      </Swiper>
    </div>
  );
}
