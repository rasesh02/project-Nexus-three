import React from 'react'
import './Services.css'
import { hitFeatures } from '@/src/utils/data'
import Image from 'next/image'
import {motion} from "framer-motion"
import { tagVariants, titleVariants } from '@/src/utils/animation'
const Services = () => {
  return (
    <div className='hiw-wrapper'>
        <div className="container">
            <div className="hiw-container">

                {/** head */}
                <div className="hiw-head">
                    <motion.span 
                      initial="offscreen" whileInView={"onscreen"} variants={tagVariants}
                    className='tag'>Our Services</motion.span>
                    <motion.span 
                      initial="offscreen" whileInView={"onscreen"} variants={titleVariants}
                    className='text'>Nexus Info will be your strategic partner in expanding your digital footprint. With a keen eye on the latest trends, we navigate the dynamic landscape of online growth, ensuring your business thrives in the digital era. 
                        Let us elevate your brand and reach new heights together.
                        </motion.span>
                        <motion.span 
                      initial="offscreen" whileInView={"onscreen"} variants={tagVariants}
                    className='sec-title'>Glimpse of our services</motion.span>
                </div>

                <div className="hiw-features">
                    {
                        hitFeatures.map((feature,i)=>(
                            <div key={i} className='hiw-feature'> 
                              {/** left side */}
                              <div className="detail">
                                 <span className='des'>0{i+1}</span>
                                 <span className='sec-title'>{feature.title}</span>
                                 <span className='text'>{feature.des}</span>
                                  <a href={feature.link} className='text'>Get a Quote</a>
                              </div>

                               {/** right side */}
                               <Image src={feature.icon} alt='feature' width={150} height={200} 
                               style={{translate:"50% 0rem" , borderRadius:"0.5rem"} }/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services