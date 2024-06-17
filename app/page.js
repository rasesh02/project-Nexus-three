"use client"
import Navbar from '@/src/components/Navbar/Navbar';
import './page.css'
import Hero from '@/src/components/Hero/Hero';
import BrandingVideo from '@/src/components/BrandingVideo/BrandingVideo';
import AboutUs from '@/src/components/AboutUs/AboutUs';
import Projects from '@/src/components/Projects/Projects';
import {motion,useAnimation} from "framer-motion"
import Services from '@/src/components/Services/Services';
import Testimonials from '@/src/components/Testimonials/Testimonials';
import Footer from '@/src/components/Footer/Footer';
export default function Home() {
   const controls=useAnimation();
  return (
    <motion.div className='app' animate={controls}>
       <Navbar/>
       <Hero/>
       <BrandingVideo/>
       <AboutUs/>
       <motion.div onViewportEnter={()=>controls.start({backgroundColor:"var(--secondary-color)",})}
        onViewportLeave={()=>controls.start({backgroundColor:"white",})} viewport={{amount:0.4}}
        /*when 40% in change the background color */> 
       <Projects/>
       </motion.div>
       <Services/>
       <Testimonials/>
       <Footer/>
    </motion.div>
  );
}
