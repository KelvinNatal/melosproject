import React from 'react'
import '../styles/containers/Footer.css'

const Footer = () => {
  return (
    <section id='footer'>
        <div className='bg-primary'>
            <div className='container d-flex'>
                <div className='row col-12'>
                    <div className='col-4 d-flex justify-content-center align-items-center flex-column'>
                        <h1 className='fs-4 mt-5'>Contatos</h1>
                            <ul className='d-flex flex-column justify-content-center'>
                                    <li>1124816172</li>
                                    <li>email@email.com</li>
                                    <li>11948563247</li>
                            </ul>
                    </div>
                    <div className='col-4 d-flex flex-column justify-content-center align-items-center'>
                        <h1 className='fs-4 mt-3'>Serviços</h1>
                            <ul className='d-flex flex-column justify-content-center'>
                                <li>asda</li>
                                <li>asas</li>
                            </ul>
                    </div>
                    <div className='col-4 d-flex justify-content-center flex-column'>
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
                    </div>
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
