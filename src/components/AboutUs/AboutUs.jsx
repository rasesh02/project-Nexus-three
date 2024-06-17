"use client"
import React from 'react'
import './AboutUs.css'
import { features } from '@/src/utils/data'
import Image from 'next/image'
import {motion} from "framer-motion"
import { containerVariants, desVariants, tagVariants, titleVariants } from '@/src/utils/animation'

const AboutUs = () => {
  return (
    <div className='wwd-wrapper'>
        <div className="container">
            <div className="wwd-container">
                <div className="wwd-head">
                    <motion.span 
                    initial="offscreen" whileInView={"onscreen"} variants={tagVariants}
                    className='tag'>About Us</motion.span>
                    <motion.span 
                    initial="offscreen" whileInView={"onscreen"} variants={titleVariants}
                    className='title'>We Are Experiential Digital Agency</motion.span>
                    <motion.p cla
                    initial="offscreen" whileInView={"onscreen"} variants={desVariants}
                    ssName='des'>We are a well governed and self sustainable organization,
                         obligated to implement win-win survival strategies to ensure proactive 
                         domination. We have helped more then 1000 clients in their digital transformation.</motion.p>
                </div>

                {/*two blocks */}
            <div className="wwd-blocks">

              {/*first block */}
              <div className="wwd-block">
                <motion.span 
                 initial="offscreen" whileInView={"onscreen"} variants={titleVariants}
                className='sec-title'>Why choose us?</motion.span>
                <motion.span 
                 initial="offscreen" whileInView={"onscreen"} variants={desVariants}
                className='text'>Discover the Nexus Info Advantage — a commitment to innovation, personalized solutions,
                   and a proven track record in driving digital success.</motion.span>
                <div className="block-features">
                {
                  features.slice(0,3).map((feature,i)=>(
                    <div className="block-feature" key={i}>
                      <Image src={feature.icon} alt='feature' width={60} height={60}/>
                      <span style={{color:'black'}}>{feature.title}</span>
                    </div>
                  ))
                }
                </div>
              </div>

              {/*second block */}
              <div className="wwd-block"> 
              <motion.span 
               initial="offscreen" whileInView={"onscreen"} variants={titleVariants}
              className='sec-title'>Tech Stack</motion.span>
                <motion.span 
                 initial="offscreen" whileInView={"onscreen"} variants={desVariants}
                className='text'>We approach every project with a carefully selected platform/technology and assign an appropriate team of designers, solutions specialists, developers, 
                  and testers. Here are some of the technologies and platforms we excel at:</motion.span>
                <div className="block-features">
                {
                  features.slice(3,6).map((feature,i)=>(
                    <div className='block-feature' key={i}>
                      <Image src={feature.icon} alt='feature' width={60} height={60}/>
                      <span style={{color:'black'}}>{feature.title}</span>
                    </div>
                  ))
                }
                </div>
              </div>
            </div>
            {/*support block */}
            <motion.div className="wwd-support" 
             initial="offscreen" whileInView={"onscreen"} variants={containerVariants(0.2)}>
              {/**left side */}
              <div>
              <span className='sec-title'> 14+ years of experience</span>
              <span className='des'>1000+ projects completed </span>
              </div>
              {/**right side */}
              <div>
              <span className='text'>Why Nexus Info?</span>
              <span className='text'>At Nexus Info, all our systems and software’s are fully compliant and adhere to licensing terms of Microsoft, Adobe and other related companies, hence ensuring you peace of mind of working with stable organization.
Even when we outsource our work to our sister companies and sub-vendors we make sure that our vendors follow all the required licensing policies and hence development of software never gets interrupted.</span>
              
              </div>

            </motion.div>

            </div>
        </div>
    </div>
  )
}

export default AboutUs