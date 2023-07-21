import React from 'react'
import '../styles/containers/Header.css'

const Header = () => {
  return (
    <section id="inicio" className='d-flex align-items-center'>
        <div className='container'>
            <div className='row d-flex'>
                <div className='col-lg-6 col-12 d-flex text-center text-lg-start flex-column align-items-lg-start align-items-center '>
                    <h1 className='fs-1 mt-5'>TRANSFORMANDO SEU PLANEJAMENTO E SONHO EM REALIDADE</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut veritatis nihil eveniet nostrum, culpa, expedita dicta.</p>
                    <a href='#contato'><button className='btn button-header mt-4 ps-4 pe-4'>Contatar</button></a>
                </div>     
            </div>
        </div>
    </section>
  )
}

export default Header

