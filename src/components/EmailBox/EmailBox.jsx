import React from 'react'
import './EmailBox.css'
import {LuMail} from 'react-icons/lu'
import {motion} from "framer-motion"
import { containerVariants } from '@/src/utils/animation'
const EmailBox = () => {
  return (
    <motion.div 
    initial={{
      width: ".5rem",
      borderRadius:"100%",
    }}
    whileInView={{
      width:"70%",
      borderRadius:"999px",
      transition:{
        type:"easeOut",
        duration: 1,
      }
    }}
    className="emailBox">
        <motion.div variants={containerVariants(0.6)} initial="offscreen" whileInView="onscreen"
        viewport={{
          once: true,/** animation will only run once, if you scroll down ant then scroll up it will not run again */
        }}>
            <LuMail size={30} color='grey'/>
        </motion.div>
        <motion.input type='text' placeholder='Message for us' 
        variants={containerVariants(0.7)} initial="offscreen" whileInView="onscreen"
        viewport={{
          once: true,
        }}
        />
        <motion.button className='getFunded'
         variants={containerVariants(0.9)} initial="offscreen" whileInView="onscreen"
         viewport={{
           once: true,
         }}
        >Send Message</motion.button>
    </motion.div>
  )
}

export default EmailBox