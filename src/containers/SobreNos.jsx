import React from 'react'
import '../styles/containers/SobreNos.css'
/*import imagem from '../assets/logo.png'*/

import { BiSolidQuoteLeft } from 'react-icons/bi'

const SobreNos = () => {
  return (
    <section id="sobre">
        <div className='pb-5 background-fundo'>
            <div className='container p-0 bg-white d-flex flex-column align-items-center rounded-4 pb-5 shadow col-11 col-lg-10'>
                <div className='row p-4 background-sobre rounded-top-4 rounded-bottom-1 m-1'>
                    <div className='col-12 d-flex align-items-center justify-content-center mt-5 mb-5 flex-column z-2'>
                        <h1 className='z-1 text-light'>Sobre Nós</h1>
                        <div className='title-servicos-badge z-0'></div>
                            <p className='text-white-50 mt-3 text-center'>Algumas avaliações de nossos clientes sobre o serviço prestado</p>
                        </div>
                        <div className='col-12'>
                            <div className='row d-flex justify-content-center'>
                                <div className='col-5 bg-white mb-5 rounded-4 p-4 pb-5'>
                                    <BiSolidQuoteLeft className='quota-icon'/>
                                    <p className='pt-2'>Somos uma empresa dedicada em solidificar serviços e projetos,visando o atendimento com excelência. O projeto é personalizado e exclusivo para cada cliente, contando com uma equipe de profissionais qualificados, que nos habilitam a desenvolver seu projeto com organização, segurança e rapidez.</p>
                                </div>
                            </div>
                            <div className='row d-flex justify-content-center'>
                                <div className='col-6 bg-white mb-5 rounded-4 p-3 pb-5'>
                                    <BiSolidQuoteLeft className='quota-icon'/>
                                    <p className='pt-2'>Desde o planejamento, passando pelo desenvolvimento, aprovando junto aos órgãos competentes. Temos satisfação de levar mais conforto, tranquilidade e felicidade para a vida dos nossos clientes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='col-12'>
                        <div className='col-12 pb-1 mt-5'>
                            <div className='row d-flex justify-content-center'>
                                <div className='col-10 col-lg-3 bg-white p-4 pb-5 me-2 mb-2 rounded-4 shadow'>
                                    <div className='d-flex justify-content-between pe-3'>
                                        <BiSolidQuoteLeft className='quota-icon'/>
                                        <h5>João Silva</h5>
                                    </div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </div>  
                                <div className='col-10 col-lg-3 bg-white p-4 mb-2 me-2 rounded-4 shadow'>
                                    <div className='d-flex justify-content-between pe-3'>
                                        <BiSolidQuoteLeft className='quota-icon'/>
                                        <h5>Caio Rodrigues</h5>
                                    </div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </div>  
                                <div className='col-10 col-lg-3 bg-white p-4 mb-2 rounded-4 me-2 shadow'>
                                    <div className='d-flex justify-content-between pe-3'>
                                        <BiSolidQuoteLeft className='quota-icon'/>
                                        <h5>Luan Neto</h5>
                                    </div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 pb-5'>
                            <div className='row d-flex justify-content-center'>
                                <div className='col-10 col-lg-3 bg-white p-4 pb-5 me-2 mb-2 rounded-4 shadow'>
                                    <div className='d-flex justify-content-between pe-3'>
                                        <BiSolidQuoteLeft className='quota-icon'/>
                                        <h5>Carlos Almeida</h5>
                                    </div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </div>  
                                <div className='col-10 col-lg-3 bg-white p-4 mb-2 me-2 rounded-4 shadow'>
                                    <div className='d-flex justify-content-between pe-3'>
                                        <BiSolidQuoteLeft className='quota-icon'/>
                                        <h5>Jonathan Oliveira</h5>
                                    </div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </div>  
                                <div className='col-10 col-lg-3 bg-white p-4 mb-2 me-2 rounded-4 shadow'>
                                    <div className='d-flex justify-content-between pe-3'>
                                        <BiSolidQuoteLeft className='quota-icon'/>
                                        <h5>Matheus Lima</h5>
                                    </div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className='title-servicos-badge-final z-0'></div>
            </div>
        </div>
    </section>
  )
}

export default SobreNos