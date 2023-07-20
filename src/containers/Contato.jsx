import React from 'react'
import '../styles/containers/Contato.css'

const Contato = () => {
  return (
    <section id="contato">
        <div className='contato-content p-3'>
            <div className='container d-flex justify-content-center'>
                <div className="left-row row m-4 col-10 ">
                    <div className='col-6 d-flex justify-content-center flex-direction-column'>
                        <div className='row d-flex'>
                            <div className="col-112 d-flex align-items-center flex-column">
                                <h1 className='fs-4 mb-4 bg-white p-2 rounded-bottom-3'>Informações de contato</h1>
                            </div> 
                            <div className='row col-10 d-flex pt-3 pb-3 informacoes-content mb-auto rounded-end-4'>
                                <div className='d-flex flex-column pt-4 pb-4 bg-danger bg-gradient rounded-end-4'>
                                    <h3 className='fs-6 fw-semibold '>Telefone: </h3>
                                    <p className='fw-light'>1123548760</p>
                                </div>
                                <div className='d-flex flex-column bg-warning bg-gradient rounded-end-4 pt-4 pb-4  mt-2 w-75 '>
                                    <h3 className='fs-6 fw-semibold'>Whatsapp: </h3>
                                    <p className='fw-light'>11984563224</p> 
                                </div>
                                <div className='d-flex flex-column bg-success bg-gradient rounded-end-4 pt-4 pb-4 mt-2 w-100'>
                                    <h3 className='fs-6 fw-semibold'>E-mail: </h3>
                                    <p className='fw-light'>email@email.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='contato-right col-6 d-flex justify-content-center align-items-center bg-white flex-direction-column'>
                            <div className='row'>
                                <div className="col-12 d-flex justify-content-center">
                                    <h1 className='fs-5 mt-3 mb-5'>Fale Conosco</h1>    
                                </div>          
                                <div className='row d-flex justify-content-center align-items-center ms-1'>
                                    <div class="form-floating col-6 mb-3 ps-1">
                                        <input type="text" class="form-control" id="floatingInput"/>
                                        <label for="floatingInput">Nome</label>
                                    </div>
                                    <div class="form-floating col-6 mb-3 ps-1">
                                        <input type="email" class="form-control" id="floatingInput" />
                                        <label for="floatingInput">Telefone</label>
                                    </div>   
                                    <div class="form-floating col-12 mb-3 mt-4 ps-1">
                                        <input type="email" class="form-control" id="floatingInput" />
                                        <label for="floatingInput">E-mail</label>
                                    </div>   
                                    <div class="form-floating col-12 mb-3 mt-4 ps-1">
                                        <input type="email" class="form-control" id="floatingInput" />
                                        <label for="floatingInput">E-mail</label>
                                    </div>  
                                    <div class="form-floating col-12 mb-3 ps-1 d-flex justify-content-center">
                                        <button class="btn mt-4 mb-4" type="submit">Enviar</button>
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