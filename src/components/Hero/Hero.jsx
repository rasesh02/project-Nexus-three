"use client"
import React from 'react'
import './Hero.css'
import EmailBox from '../EmailBox/EmailBox'
import { HeroData } from '@/src/utils/data'
import { motion} from 'framer-motion'

const Hero = () => {
  const variants=(delay)=>({
    initial:{
      y: "18rem"
    },
    animate:{
      y:"0rem",
      transition:{
        type: "spring",
        damping: 25,
        duration: 2.5,
        delay
      }
    }
  })
  const imgVariants=()=>({
    initial:{
      y: "18rem"
    },
    animate:{
      y:"0rem",
      transition:{
        type: "spring",
        duration: 2,
        stifness: 30,
      }
    }
  })

  return (
   <div className="h-wrapper">
    <div className="container">

      <div className="h-container">
        
        <div className="h-left">
         <div className="image-row">
          {
            HeroData.slice(0,3).map((person,i)=>(
                <div className="person-pill" key={i}>
                  <motion.div className="person-pill-bg" 
                  initial={"initial"} animate={"animate"} variants={variants(person.delay)} style={{backgroundColor: person.bg}}>
                    <motion.img 
                    initial={"initial"} animate={"animate"} variants={imgVariants()}
                    src={person.src} alt={person.src}/>
                  </motion.div>
                </div>
            ))
          }
         </div>
         <div className="image-row">
          {
            HeroData.slice(3,6).map((person,i)=>(
                <div className="person-pill" key={i}>
                  <motion.div className="person-pill-bg" 
                    initial={"initial"} animate={"animate"} variants={variants(person.delay)} style={{backgroundColor: person.bg}}>
                    <motion.img 
                    initial={"initial"} animate={"animate"} variants={imgVariants()}
                    src={person.src} alt={person.src}/>
                  </motion.div>
                </div>
            ))
          }
         </div>
        </div>
       <div className="h-right">
        
        <div className="h-title">
           <span>IT Solutions and Website Development</span>
           <span>Grow your Business with Nexus Info</span>
        </div>
        <div className="h-des">
        Get free ideas for your business growth and learn why a website is important for your business
        </div>

      <EmailBox/>
        </div>

      </div>
    </div>
   </div>
  )
}

export default Hero