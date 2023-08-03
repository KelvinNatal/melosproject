import React from 'react'
import '../styles/containers/Footer.css'

import { BsWhatsapp, BsFacebook, BsInstagram, BsTelephoneFill} from 'react-icons/bs'
import { MdLocationPin } from 'react-icons/md';
import { AiFillMail } from 'react-icons/ai';
import { RiWhatsappFill } from 'react-icons/ri';
import imagem from '../assets/logo.png'

const Footer = () => {
  return (
    <section id='footer'>
        <div className='bg-footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-3 pt-4 pb-3 d-flex justify-content-center'>
                        <img src={imagem} alt='' className='imagem-footer'></img>
                    </div>
                    <div className='col-12 col-lg-4 d-flex justify-content-center align-items-center contato-footer flex-column mb-2 mb-lg-0'>
                        <h1 className='fs-5 mt-3 mb-4 mb-lg-2'>Contatos</h1>
                            <ul className='d-flex flex-column justify-content-center pe-2'>
                                    <a href="https://api.whatsapp.com/send?phone=11947712745" target="_blank" rel="noopener noreferrer"><li><RiWhatsappFill className='me-3'/>(11) 9 4771-2745</li></a>
                                    <a href="tel:1125615037" target="_blank" rel="noopener noreferrer"><li><BsTelephoneFill className='me-3'/>(11) 2561-5037</li></a>
                                    <a href="mailto:contato@melosengenharia.com" target="_blank" rel="noopener noreferrer"><li><AiFillMail className='me-3'/>contato@melosengenharia.com</li></a>
                            </ul>                                         
                    </div>
                    <div className='col-12 col-lg-4 d-flex justify-content-center mb-1 align-items-center flex-column contato-footer'>
                        <h1 className='fs-5 mt-4'>Endereço</h1>
                            <ul className='d-flex flex-column justify-content-center me-4'>
                                    <li className='mb-1'>Rua do pombo correio, 223</li>
                                    <li>Rua Augusto Carlos Bauman, 908 - Sala 02</li>
                            </ul>  
                    </div>      
                    <div className='col-12 col-lg-1 d-flex align-items-center justify-content-center pe-5 pe-lg-0'>
                        <ul className="d-flex lista-icones">
                            <li className="ps-3 p-2">
                                <BsWhatsapp className='fs-4'/>
                            </li>
                            <li className="p-2">
                                <BsFacebook className='fs-4'/>
                            </li>
                            <li className="p-2">
                                <BsInstagram className='fs-4'/>
                            </li>
                        </ul>
                    </div>
                    <hr></hr>
                    <div class="footer-bottom">
                        <div class="container">
                            <div class="row col-12 g-3 justify-content-center text-center">
                                <div class="col-auto">
                                    <p>Copyright Melos Engenharia. All Rights Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
