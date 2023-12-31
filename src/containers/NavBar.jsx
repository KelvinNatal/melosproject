import React, { useEffect, useState } from 'react'
import '../styles/containers/NavBar.css'

import { BsWhatsapp, BsFacebook, BsInstagram} from 'react-icons/bs'

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
    <section id='navb'>
        <nav className={`navbar navbar-dark navbar-expand-lg p-1 d-flex flex-column position-fixed w-100 z-3 ${scrolled}`}>
            <div className="container">
                <div className='navbar-brand navbar-logo mt-1'>
                    <div className='container'>
                        <a href='#inicio'><img src={logo} alt='logo' className='logo-image pb-1'/></a>
                    </div>
                </div>
                <button class="navbar-toggler ms-auto custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className='navbar-nav d-flex ms-auto nav-links-bottom justify-content-center mt-1'>
                        <li className="nav-item p-2">
                            <a className="nav-link fs-6 pe-2" href='#inicio'>Inicio</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="nav-link fs-6 pe-2" href='#servicos'>Serviços</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="nav-link fs-6 pe-2" href='#sobre'>Sobre nós</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="nav-link fs-6 pe-2" href='#contacto'>Contato</a>
                        </li>
                    </ul>
                    <ul className="mt-3 ms-auto d-flex align-items-center justify-content-center z-1">
                        <li className="nav-item icon-items p-2">
                            <a href='https://api.whatsapp.com/send?phone=11947712745' target="_blank" rel="noopener noreferrer"><BsWhatsapp className='nav-icon-whatsapp fs-4'/></a>
                        </li>
                        <li className="nav-item icon-items p-2">
                            <a href='#'><BsFacebook className='nav-icon-facebook fs-4'/></a>
                        </li>
                        <li className="nav-item icon-items p-2">
                            <a href='https://instagram.com/melosengenharia23?igshid=MzRlODBiNWFlZA==' target="_blank" rel="noopener noreferrer" ><BsInstagram className='nav-icon-instagram fs-4'/></a>
                        </li>
                    </ul>
                </div>
            </div>       
        </nav>
    </section>
    </>
  )
}

export default NavBar
