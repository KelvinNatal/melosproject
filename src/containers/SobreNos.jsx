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
                            <p className='text-white-50 mt-3 text-center w-50'>Valorizamos a segurança, felicidade e satisfação de nossos clientes!</p>
                        </div>
                        <div className='col-12'>
                            <div className='row d-flex justify-content-center'>
                                <div className='col-11 col-lg-5 bg-white text-center mb-5 rounded-4 p-4 pb-5'>
                                    <p className='pt-2'>Somos uma empresa dedicada em solidificar serviços e projetos,visando o atendimento com excelência. O projeto é personalizado e exclusivo para cada cliente, contando com uma equipe de profissionais qualificados, que nos habilitam a desenvolver seu projeto com organização, segurança e rapidez.</p>
                                </div>
                            </div>
                            <div className='row d-flex justify-content-center'>
                                <div className='col-12 col-lg-6 bg-white text-center mb-5 rounded-4 p-3 pb-5'>
                                    <p className='pt-3'>Desde o planejamento, passando pelo desenvolvimento, aprovando junto aos órgãos competentes. Temos satisfação de levar mais conforto, tranquilidade e felicidade para a vida dos nossos clientes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='col-12'>
                        <div className='col-12 pb-1 mt-5'>
                            <div className='row d-flex justify-content-center'>
                                <div className='col-12 mb-5 d-flex flex-column align-items-center'>
                                    <p className='mt-3 fs-5 text-center pb-1 fw-medium'>Avaliações</p>
                                    <div className='title-servicos-badge-final mt-4 w-25'></div>
                                </div>
                                <div className='col-10 col-lg-3 text-center bg-white p-4 me-0 me-lg-2 mb-2 rounded-4 shadow'>
                                    <div className='d-flex justify-content-between pe-3'>
                                        <BiSolidQuoteLeft className='quota-icon'/>
                                        <h5>João Silva</h5>
                                    </div>
                                    <p className='pb-2 pt-1'>Serviço excelente!!! Qualidade, rapidez e foram super atenciosos. Super recomendo.</p>
                                </div>  
                                <div className='col-10 col-lg-3 text-center bg-white p-4 mb-2 me-0 me-lg-2 rounded-4 shadow'>
                                    <div className='d-flex justify-content-between pe-3'>
                                        <BiSolidQuoteLeft className='quota-icon'/>
                                        <h5>Caio Rodrigues</h5>
                                    </div>
                                    <p className='pb-2 pt-1'>Já recomendei para outras pessoas, ótimo trabalho e muito eficientes.</p>
                                </div>  
                                <div className='col-10 col-lg-3 text-center bg-white p-4 mb-2 rounded-4 me-0 me-lg-2 shadow'>
                                    <div className='d-flex justify-content-between pe-3'>
                                        <BiSolidQuoteLeft className='quota-icon'/>
                                        <h5>Luan Neto</h5>
                                    </div>
                                    <p className='pb-2 pt-1'>Muito top! Serviço excelente, agilidade e tudo de muita qualidade!</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 pb-5'>
                            <div className='row d-flex justify-content-center'>
                                <div className='col-10 col-lg-3 text-center bg-white p-4 me-0 me-lg-2 mb-2 rounded-4 shadow'>
                                    <div className='d-flex justify-content-between pe-3'>
                                        <BiSolidQuoteLeft className='quota-icon'/>
                                        <h5>Carlos Almeida</h5>
                                    </div>
                                    <p className='pb-2 pt-1'>Projeto excelente, atendimento ótimo, rapidez na execução das instalações e serviço excelente!</p>
                                </div>  
                                <div className='col-10 col-lg-3 text-center bg-white p-4 mb-2 me-0 me-lg-2 rounded-4 shadow'>
                                    <div className='d-flex justify-content-between pe-3'>
                                        <BiSolidQuoteLeft className='quota-icon'/>
                                        <h5>Jonathan Oliveira</h5>
                                    </div>
                                    <p className='pb-2 pt-1'>Tudo certinho! Excelente serviço e projetos muito bem estruturados!</p>
                                </div>  
                                <div className='col-10 col-lg-3 text-center bg-white p-4 mb-2 me-0 me-lg-2 rounded-4 shadow'>
                                    <div className='d-flex justify-content-between pe-3'>
                                        <BiSolidQuoteLeft className='quota-icon'/>
                                        <h5>Matheus Lima</h5>
                                    </div>
                                    <p className='pb-2 pt-1'>Ótimo serviço e rápido, atendimento excelente!</p>
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