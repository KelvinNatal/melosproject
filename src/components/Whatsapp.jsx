import React from 'react'
import '../styles/components/Whatsapp.css'

import { BsWhatsapp } from 'react-icons/bs';

const Whatsapp = () => {
  return (
    <a href="https://api.whatsapp.com/send?phone=11947712745" target="_blank" rel="noopener noreferrer">
      <div className='whatsapp-container' data-aos="fade-left">
          <div className='whatsapp-content' data-aos="zoom-in">
              <BsWhatsapp className='whatsapp-icon'/>
          </div>
      </div>
    </a>
  )
}

export default Whatsapp
