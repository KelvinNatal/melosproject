import React from 'react'
import '../styles/containers/Contato.css'

const Contato = () => {
  return (
    <section id="contato">
        <div className='contato-content p-3'>
            <div className='container d-flex justify-content-center'>
                <div className="left-row row m-4 col-10 ">
                    <div className='col-6 d-flex justify-content-center flex-direction-column'>
                        <div className='row d-flex justify-content-center'>
                            <div className="col-12 d-flex align-items-center flex-column">
                                <h1 className='fs-4 mt-4 mb-5 text-light'>Informações de contato</h1>
                                <p>Entre em contato conosco nos canais a seguir</p>

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
                                        <input type="text" class="form-control" id="floatingInput" placeholder="Nome"/>
                                        <label for="floatingInput">Nome</label>
                                    </div>
                                    <div class="form-floating col-6 mb-3 ps-1">
                                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                        <label for="floatingInput">Telefone</label>
                                    </div>   
                                    <div class="form-floating col-12 mb-3 mt-4 ps-1">
                                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                        <label for="floatingInput">E-mail</label>
                                    </div>   
                                    <div class="form-floating col-12 mb-3 ps-1 d-flex justify-content-center">
                                        <button class="btn mt-4 mb-4" type="submit">Enviar</button>
                                    </div>  
                                    <div class="form-floating col-12 mb-3 ps-1 d-flex justify-content-center">
                                        <button class="btn mt-4 mb-4" type="submit">Enviar</button>
                                    </div>        
                                </div>                       
                            </div>
                    </div>
                    {/*<div className=' col-12 bg-secondary mt-1'>
                        <div class="row">
                            <div className='col-12 d-flex justify-content-center'>
                                <h1 className='fs-5 mt-3'>Horário de Funcionamento</h1>
                            </div>
                            <div className='col-12 d-flex justify-content-center'>
                                <h5 className='fs-6'>Seg - Sex: 09h - 18h</h5>
                            </div>
                            <div className='col-12 d-flex justify-content-center'>
                                <h5 className='fs-6'>Sab - 09h - 16h</h5>
                            </div>
                        </div> 
                    </div>*/}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contato