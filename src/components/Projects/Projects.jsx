import React from 'react'
import {Link} from 'react-scroll'
import './Projects.css'
import { ourDiffFeatures } from '@/src/utils/data'
import Image from 'next/image'
const Projects = () => {
    const links=['https://atmos.leeroy.ca/','https://www.designfuture.world/','https://www.blacktailor.store/']
  return (
    <div className='od-wrapper'>
        <div className="container">
            <div className="od-container">
                <div className="od-head">
                    <span className='tag'>Our Projects</span>
                    <span className='title'>DISCOVER OUR PROJECTS</span>
                    <span className='text'>Take a closer look at our previous projects, showcasing the successful collaborations and impactful 
                        solutions we’ve delivered for our valued clients.</span>
                </div>

                <div className="od-features">
                    {
                        ourDiffFeatures.map((feature,i)=>(
                 <div  className='od-feature' key={i}>
              <Image src={feature.icon} alt="feature" width={180} height={180} style={{borderRadius:'0.2rem'}} />
                    <span className='sec-title'>{feature.title}</span>
                    <span className='text'>{feature.des}
                    </span>
                    <a href={feature.req}>Visit Project</a>
                 </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects