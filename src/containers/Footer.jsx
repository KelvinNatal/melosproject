import React from 'react'
import '../styles/containers/Footer.css'

import { BsWhatsapp, BsFacebook, BsInstagram} from 'react-icons/bs'
import imagem from '../assets/logo.png'

const Footer = () => {
  return (
    <section id='footer'>
        <div className='bg-footer mt-5'>
            <div className='container d-flex'>
                <div className='row col-12'>
                    <div className='col-3 ms-auto d-flex justify-content-center flex-column'>
                        <img src={imagem} alt='' className='imagem-footer'></img>
                    </div>
                    <div className='col-3 d-flex justify-content-center align-items-center contato-footer flex-column'>
                            <h1 className='fs-5'>Contatos</h1>
                                <ul className='d-flex flex-column justify-content-center align-items-center me-4 pe-2'>
                                        <li>1124816172</li>
                                        <li>email@email.com</li>
                                </ul>                                         
                    </div>
                    <div className='col-3 d-flex mb-4 justify-content-center align-items-center flex-column contato-footer'>
                        <h1 className='fs-5'>Endereço</h1>
                            <ul className='d-flex flex-column justify-content-center me-4'>
                                    <li>Rua Lorem Ipsum</li>
                            </ul>  
                    </div>      
                    <div className='col-3 d-flex align-items-center'>
                        <ul className="ms-auto d-flex">
                            <li className="p-2">
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
                    {/*<div className='col-4 d-flex justify-content-center flex-column'>
                        <div className=' col-12'>
                            <div class="row">
                                <div className='col-12 d-flex justify-content-center'>
                                    <h1 className='fs-4'>Horário</h1>
                                </div>
                                <div className='col-12 d-flex justify-content-center'>
                                    <h5 className='fs-6'>Seg - Sex: 09h - 18h</h5>
                                </div>
                                <div className='col-12 d-flex justify-content-center'>
                                    <h5 className='fs-6'>Sab - 09h - 16h</h5>
                                </div>
                            </div> 
                        </div>
                    </div>*/}
                    <hr></hr>
                    <div class="footer-bottom">
                        <div class="container">
                            <div class="row g-4 justify-content-between ">
                                <div class="col-auto">
                                    <p>Copyright Melos Engenharia. All Rights Reserved</p>
                                </div>
                                <div class="col-auto">
                                    <p>Designed By <a href="#">Kelvin</a></p>
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
