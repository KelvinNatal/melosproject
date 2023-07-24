import React from 'react'
import '../styles/containers/SobreNos.css'
/*import imagem from '../assets/logo.png'*/

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
                                <div className='col-9 text-center bg-white mb-5 rounded-4 p-3 pb-4'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rerum, recusandae excepturi rem nulla obcaecati asperiores minima veniam autem.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='col-12'>
                        <div className='col-12 pb-1 mt-5'>
                            <div className='row d-flex justify-content-center'>
                                <div className='col-10 col-lg-3 bg-white p-4 pb-5 me-2 mb-2 rounded-4 shadow'>
                                    <h5>João Silva</h5>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </div>  
                                <div className='col-10 col-lg-3 bg-white p-4 mb-2 me-2 rounded-4 shadow'>
                                    <h5>Caio Rodrigues</h5>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </div>  
                                <div className='col-10 col-lg-3 bg-white p-4 mb-2 rounded-4 me-2 shadow'>
                                    <h5>Luan Neto</h5>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 pb-5'>
                            <div className='row d-flex justify-content-center'>
                                <div className='col-10 col-lg-3 bg-white p-4 pb-5 me-2 mb-2 rounded-4 shadow'>
                                    <h5>Carlos Almeida</h5>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </div>  
                                <div className='col-10 col-lg-3 bg-white p-4 mb-2 me-2 rounded-4 shadow'>
                                    <h5>Jonathan Oliveira</h5>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </div>  
                                <div className='col-10 col-lg-3 bg-white p-4 mb-2 me-2 rounded-4 shadow'>
                                    <h5>Matheus Lima</h5>
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