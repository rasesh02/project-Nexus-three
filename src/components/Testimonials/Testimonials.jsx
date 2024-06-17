import React from 'react'
import './Testimonials.css'
//import Slickslider from './Slickslider'
const Testimonials = () => {
  return (
    <div className='t-wrapper'>
        <div className="container">
            <div className="t-container">
                <div className="t-head">
                    <span className='tag'>Testimonials</span>
                    <span className='des'>What they say</span>
                </div>
            </div>
                <Slickslider/>
          
        </div>
    </div>
  )
}

export default Testimonials
