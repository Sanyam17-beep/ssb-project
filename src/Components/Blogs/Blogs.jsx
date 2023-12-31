import React from 'react'
import "./style.css"
import im1 from "../../im1.jpg";
function Blogs() {
  return (
    <div className='blogs-container'>
        <div className='blogs-header'>
            <div className='blog-heading'>Recent Blogs & News</div>
            <div className='Explore-button'>Explore all blogs</div>
        </div>
        <div className='blog-box-container'>
            <div className='blog'>
                <div className='blog-image'>
                <img src={im1}  alt="" />
                </div>
                <div className='blog-content'>
                    <div className='keyword'>Keyword | Date</div>
                    <div className='blog-title'>Lorem Ipsum : AI is a simply dummy</div>
                    <div className='blog-para'>3 min read - Welcome to Burger Bliss, where we take your cravings to a whole new level! . summury</div>
                </div>
            </div>
            <div className='blog'>
            <div className='blog-image'>
            <img src={im1}  alt="" />
            </div>
                <div className='blog-content'>
                <div className='keyword'>Keyword | Date</div>
                    <div className='blog-title'>Lorem Ipsum : AI is a simply dummy</div>
                    <div className='blog-para'>3 min read - Welcome to Burger Bliss, where we take your cravings to a whole new level! . summury</div>
                </div>
            </div>
            <div className='blog'>
            <div className='blog-image'>
            <img src={im1}  alt="" />
            </div>
                <div className='blog-content'>
                <div className='keyword'>Keyword | Date</div>
                    <div className='blog-title'>Lorem Ipsum : AI is a simply dummy</div>
                    <div className='blog-para'>3 min read - Welcome to Burger Bliss, where we take your cravings to a whole new level! . summury</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blogs