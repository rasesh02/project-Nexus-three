/*import React from 'react'
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
          once: true,
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

export default EmailBox  */

import React, { useState } from 'react';
import './EmailBox.css';
import { LuMail } from 'react-icons/lu';
import { motion } from 'framer-motion';
import { containerVariants } from '@/src/utils/animation';

const EmailBox = () => {
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = () => {
    if (message.trim() !== "") {
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
        setMessage("");
      }, 2000); // Reset message and hide confirmation after 2 seconds
    }
  };

  return (
    <motion.div
      initial={{ width: ".5rem", borderRadius: "100%" }}
      whileInView={{
        width: "70%",
        borderRadius: "999px",
        transition: {
          type: "easeOut",
          duration: 1,
        }
      }}
      className="emailBox"
    >
      <motion.div
        variants={containerVariants(0.6)}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        <LuMail size={30} color='grey' />
      </motion.div>
      <motion.input
        type='text'
        placeholder='Message for us'
        variants={containerVariants(0.7)}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <motion.button
        className='getFunded'
        variants={containerVariants(0.9)}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        onClick={handleSubmit}
      >
        Send Message
      </motion.button>
      {isSent && alert("Message Sent")}
    </motion.div>
  );
};

export default EmailBox;
