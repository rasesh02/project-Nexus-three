import React from 'react'
import Newsletter from '../Newsletter/Newsletter'
import Image from 'next/image'
import { footerIcons } from '@/src/utils/data'
import './Footer.css'
const Footer = () => {
  return (
    <div className='f-wrapper'>
      <div className="container">
        <div className="f-container">
          <span className='f-head'>Nexus</span>


          <div className="f-blocks">

            <div className='f-block'>
              <span className='sec-title'>Reach Us</span>
              <div className='block-features'>
                {footerIcons.map((feature, i) => (
                  <div key={i} className='block-feature'>
                    <Image src={feature.src} alt="feature" width={40} height={40} />
                    <a href={feature.req}>{feature.des}</a>
                  </div>
                ))
                }
              </div>
            </div>

            <div className='f-block'>
              <div className='nl'>
              <Newsletter />
              </div>
              </div>
          </div>
          <hr />
         <div className="footer-links">
         <a href="https://nexusinfo.in/" className="footer-link">Privacy Policy</a>
          <a href="https://nexusinfo.in/#" className="footer-link">Cookie Policy</a>
          <a href="https://nexusinfo.in/#" className="footer-link">Terms of Use</a>
         </div>

         <div className="footer-info">
          &copy; {new Date().getFullYear()} Nexus Info. All rights reserved.
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer