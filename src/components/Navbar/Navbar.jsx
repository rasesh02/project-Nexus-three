"use client"
import React, { useState } from 'react'
import './Navbar.css'
import {BiMenuAltRight} from 'react-icons/bi'
import {RxCross2} from 'react-icons/rx'
import { transform } from 'framer-motion';
import {motion,useMotionValueEvent,useScroll} from "framer-motion";
import {Link} from 'react-scroll'

const Navbar = () => {
   const [toggle,setToggle]=useState(false);
   const [navStyle,setNavStyle]=useState("");
   const {scrollYProgress}=useScroll();
  useMotionValueEvent(scrollYProgress,"change",(latest)=>{
    if(latest>0.2) {
      setNavStyle("sticky")
    }
    else{
      setNavStyle("");
    }
  })
  return (
   <div className={`n-wrapper ${navStyle}`}>
    <div className="container">
        <div className="n-container">


           {/* left side*/ }
           <div className="n-logo">
            <Link to='n-wrapper' spy={true} smooth={true}><span>Nexus Info</span></Link>
           </div>


           {/* right side*/ }
           <div className="n-right">
              <div className="n-menu">
                <Link to='wwd-wrapper' spy={true} smooth={true}><span style={{cursor:'pointer'}}>About Us</span></Link>
                <Link to='od-wrapper' spy={true} smooth offset={100}><span style={{cursor:'pointer'}}>Projects</span></Link>
                <Link to='hiw-wrapper' spy={true} smooth><span style={{cursor:'pointer'}}>Services</span></Link>
                <Link to='t-wrapper' spy={true} smooth offset={100}><span style={{cursor:'pointer'}}>Testimonials</span></Link>
              </div>
              <a href='https://nexusinfo.in/contact-us/' className="fund-button">Contact Us</a>
           </div>
        </div>
    </div>

    {/*mobile version */}
    <div className="nm-container">
      <span>Nexus Info</span>

     { !toggle?<BiMenuAltRight size={30} onClick={()=>setToggle(true)}/> 
     : <RxCross2 size={30} onClick={()=>setToggle(false)}/>}
      <div className="nm-menu" style={{transform:toggle && "translateX(0%)"}}>
             <Link onClick={()=>setToggle(false)} to="wwd-wrapper"  spy={true} smooth={true}> <span>About Us</span></Link>
             <Link onClick={()=>setToggle(false)} to="od-wrapper"  spy={true} smooth offset={100}> <span>Projects</span></Link>
             <Link onClick={()=>setToggle(false)} to="hiw-wrapper"  spy={true} smooth> <span>Services</span></Link>
             <Link onClick={()=>setToggle(false)} to="t-wrapper"  spy={true} smooth offset={100}> <span>Testimonials</span></Link>
            <a className="m-funded"  href='https://nexusinfo.in/contact-us/'>Contact Us</a>
      </div>
    </div>
   </div>
  )
}

export default Navbar