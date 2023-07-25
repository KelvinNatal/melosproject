import React from 'react'
import '../styles/containers/Contato.css'

import { MdLocationPin } from 'react-icons/md';
import { AiFillMail } from 'react-icons/ai';
import { RiWhatsappFill } from 'react-icons/ri';
import { BsWhatsapp, BsFacebook, BsInstagram, BsTelephoneFill} from 'react-icons/bs'

const Contato = () => {
  return (
    <section id="contacto">
        <div className='contato-content p-lg-5 d-flex justify-content-center'>
            <div className='container d-flex justify-content-center m-lg-5'>
                <div className="left-row row m-4 col-12 col-lg-10">
                    <div className='contato-right col-lg-6 bg-white pe-4 rounded-4' data-aos="fade-up">
                        <div className='row'>         
                            <div className='col-12 d-flex flex-column justify-content-lg-center align-items-lg-center ms-1'>
                                <div className="col-12 d-flex justify-content-center mb-5 mb-lg-0">
                                    <h1 className='fs-5 mt-3 mb-lg-5 mb-0 text-black'>Fale Conosco</h1>    
                                </div> 
                                <div className='col-12 d-flex flex-column flex-lg-row'>
                                    <div class="form-floating col-lg-6 col-12 mb-lg-3 ps-1">
                                        <input type="text" class="form-control" id="floatingInput"/>
                                        <label for="floatingInput">Nome</label>
                                    </div>
                                    <div class="form-floating col-lg-6 col-12 mb-lg-3 mt-4 mt-lg-0 ps-1">
                                        <input type="email" class="form-control" id="floatingInput" />
                                        <label for="floatingInput">Telefone</label>
                                    </div>   
                                </div>
                                <div class="form-floating col-12 mb-lg-3 mt-4 ps-1">
                                    <input type="email" class="form-control" id="floatingInput" />
                                    <label for="floatingInput">E-mail</label>
                                </div>   
                                <div class="form-floating col-12 mb-lg-3 mt-4 ps-1">
                                    <input type="email" class="form-control" id="floatingInput" />
                                    <label for="floatingInput">E-mail</label>
                                </div>  
                                <div class="form-floating col-12 mb-lg-3 ps-1 d-flex justify-content-center">
                                    <button class="btn mt-4 mb-4 pe-4 ps-4 pt-2 pb-2 rounded-4 fw-medium" type="submit">Enviar</button>
                                </div>        
                            </div>                       
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 d-flex justify-content-center flex-direction-column" data-aos="fade-left">
                        <div className='contato-div mt-5 mt-lg-3'>
                            <h1 className='fs-3 mb-5'>Informações de contato</h1>
                            <ul className="contact-list d-flex flex-column align-items-start justify-content-center pt-3">
                                <li className="mb-3"><MdLocationPin className='contato-icon me-5'/><span className="contact-text place fw-semibold">São Paulo, SP</span></li>
                                
                                <li className="mb-3"><BsTelephoneFill className='contato-icon me-5'/><span className="fw-semibold"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></li>
                                
                                <li className="mb-3"><RiWhatsappFill className='contato-icon me-5'/><span className="fw-semibold"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></li>

                                <li className="mb-3"><AiFillMail className='contato-icon me-5'/><span className="fw-semibold"><a href="mailto:#" title="Send me an email">hitmeup@gmail.com</a></span></li>   
                            </ul>
                            <hr/>
                                <ul className="d-flex align-items-center justify-content-center z-1">
                                    <li className="nav-item p-2">
                                        <BsWhatsapp className='fs-4'/>
                                    </li>
                                    <li className="nav-item p-2">
                                        <BsFacebook className='fs-4'/>
                                    </li>
                                    <li className="nav-item p-2">
                                        <BsInstagram className='fs-4'/>
                                    </li>
                                </ul>
                            <hr/>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contato