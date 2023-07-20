import React, { useEffect, useState } from 'react'
import '../styles/containers/NavBar.css'

import { BsWhatsapp, BsFacebook, BsInstagram} from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'

import logo from '../assets/logo.png'

const NavBar = () => {

    const [scrolled, setScrolled] = useState('');

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 10){
                setScrolled('navbar-background');
            } else {
                setScrolled('');
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.addEventListener("scroll", onScroll);
    }, [])

  return (
    <>
    <section id='navbar'>
        <nav className={`navbar navbar-expand-lg p-3 d-flex flex-column position-fixed w-100 z-3 ${scrolled}`}>
            <div className="container">
                <AiOutlineMenu className='navbar-button fs-2 z-1'/>
                {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className='navbar-logo position-absolute start-0 w-100'>
                    <div className='container d-flex justify-content-center'>
                        <img src={logo} alt='logo' className='logo-image z-1 pb-1'/>
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto d-flex align-items-center justify-content-center z-1">
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
                </div>
            </div>       
        </nav>
       {/*<div className='z-3 d-flex w-100 nav-links-bottom position-fixed nav-bottom'>
            <div className=' container d-flex justify-content-center align-items-center p-1'>
                <a className="fs-6 pe-2" href='#'>Inicio</a>
                <a className="fs-6 pe-2" href='#servicos'>Serviços</a>
                <a className="fs-6 pe-2" href='#'>Sobre nós</a>
                <a className="fs-6 pe-2" href='#'>Contato</a>
            </div>    
        </div>*/}
    </section>
    </>
  )
}

export default NavBar
