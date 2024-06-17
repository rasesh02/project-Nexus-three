"use client"
import React, { useRef } from 'react'
import './BrandingVideo.css'
import {motion, useScroll, useTransform} from "framer-motion"
const BrandingVideo = () => {
    const ref=useRef(null);
   const {scrollYProgress}=useScroll({  // calculate no. of scrolls
    target: ref,
    offset:["start end","end end"]
   })
   const scale=useTransform(scrollYProgress,[0,1],[.6,1]) // transfrom from 0,1 in y axis to .6,1 in yaxis
  return (            //at beginning scroolyprogress is 0 & we'll take it to 1
    <div className='bv-container'>
        <div className="container">
            <motion.video ref={ref} className='bv-video' loop muted autoPlay controls="" style={{scale}}>
                <source src="brandvideo.mp4" type='video/mp4'/>
            </motion.video>
        </div>
    </div>
  )
}

export default BrandingVideo