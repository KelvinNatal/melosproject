import React from 'react'
import '../styles/components/Whatsapp.css'

import { BsWhatsapp } from 'react-icons/bs';

const Whatsapp = () => {
  return (
    <div className='whatsapp-container' data-aos="fade-left">
        <div className='whatsapp-content' data-aos="zoom-in">
            <BsWhatsapp className='whatsapp-icon'/>
        </div>
    </div>
  )
}

export default Whatsapp
