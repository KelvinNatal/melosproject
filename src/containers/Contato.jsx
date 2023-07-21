import React from 'react'
import '../styles/containers/Contato.css'

const Contato = () => {
  return (
    <section id="contato">
        <div className='contato-content p-3'>
            <div className='container d-flex justify-content-center'>
                <div className="left-row row m-4 col-12 col-lg-10">
                    <div className='col-12 col-lg-6 d-flex justify-content-center flex-direction-column'>
                        <div className='row d-flex justify-content-center'>
                            <div className="col-12 d-flex align-items-center flex-column">
                                <h1 className='fs-4 bg-white p-2 rounded-bottom-3 shadow-sm'>Informações de contato</h1>
                            </div> 
                            <div className='row col-10 d-flex pt-4 informacoes-content mb-5 rounded-4 pb-4'>
                                <div className='d-flex flex-column pt-3 pb-4 rounded-end-4 border border-black'>
                                    <h3 className='fs-6 fw-semibold '>Telefone: </h3>
                                    <p className='fw-light'>1123548760</p>
                                </div>
                                <div className='d-flex flex-column rounded-end-4 pt-3 pb-4 mt-2 w-100 border border-black'>
                                    <h3 className='fs-6 fw-semibold'>Whatsapp: </h3>
                                    <p className='fw-light'>11984563224</p> 
                                </div>
                                <div className='d-flex flex-column rounded-end-4 pt-3 pb-4 mt-2 w-100 border border-black'>
                                    <h3 className='fs-6 fw-semibold'>E-mail: </h3>
                                    <p className='fw-light'>email@email.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='contato-right col-lg-6 bg-white pe-4'>
                            <div className='row'>         
                                <div className='col-12 d-flex flex-column justify-content-lg-center align-items-lg-center ms-1'>
                                    <div className="col-12 d-flex justify-content-center mb-5 mb-lg-0">
                                        <h1 className='fs-5 mt-3 mb-lg-5 mb-0'>Fale Conosco</h1>    
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
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contato