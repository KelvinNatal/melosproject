import React from 'react'
import '../styles/containers/Footer.css'

import { BsWhatsapp, BsFacebook, BsInstagram} from 'react-icons/bs'
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
                    <div className='col-12 col-lg-3 d-flex justify-content-center align-items-center contato-footer flex-column'>
                        <h1 className='fs-5'>Contatos</h1>
                            <ul className='d-flex flex-column justify-content-center align-items-center me-4 pe-2'>
                                    <li>1124816172</li>
                                    <li>email@email.com</li>
                            </ul>                                         
                    </div>
                    <div className='col-12 col-lg-3 d-flex justify-content-center mb-4 align-items-center flex-column contato-footer'>
                        <h1 className='fs-5'>Endereço</h1>
                            <ul className='d-flex flex-column justify-content-center me-4'>
                                    <li>Rua Lorem Ipsum</li>
                            </ul>  
                    </div>      
                    <div className='col-12 col-lg-3 d-flex align-items-center justify-content-center pe-5 pe-lg-0'>
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
