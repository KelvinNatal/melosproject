import React from 'react'
import '../styles/containers/Header.css'

const Header = () => {
  return (
    <section id="inicio" className='d-flex align-items-center'>
        <div className='container'>
            <div className='row d-flex'>
                <div className='col-lg-6 col-12 d-flex text-center text-lg-start flex-column align-items-lg-start align-items-center '>
                    <h1 className='fs-1 mt-5' data-aos="fade-right">TRANSFORMANDO SEU PLANEJAMENTO E SONHO EM REALIDADE</h1>
                    <p data-aos="fade-left">Venha conosco construir seu projeto. Juntos daremos vida ao seu sonho com qualidade, rapidez e segurança.</p>
                    <a href='#contacto'><button className='button-header mt-4' data-aos="fade-up">Contatar</button></a>
                </div>     
            </div>
        </div>
    </section>
  )
}

export default Header

