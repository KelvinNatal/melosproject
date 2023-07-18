import React from 'react'
import '../styles/components/Whatsapp.css'

import { BsWhatsapp } from 'react-icons/bs';

const Whatsapp = () => {
  return (
    <div className='whatsapp-container'>
        <div className='whatsapp-content'>
            <BsWhatsapp className='whatsapp-icon'/>
        </div>
    </div>
  )
}

export default Whatsapp
