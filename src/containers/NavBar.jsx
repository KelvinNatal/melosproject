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
        <nav className={`navbar navbar-expand-lg p-1 d-flex flex-column position-fixed w-100 z-3 ${scrolled}`}>
            <div className="container">
                <div className='navbar-brand navbar-logo mt-1'>
                    <div className='container'>
                        <img src={logo} alt='logo' className='logo-image pb-1'/>
                    </div>
                </div>
                <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className='navbar-nav d-flex ms-auto nav-links-bottom justify-content-center mt-1'>
                        <li className="nav-item p-2">
                            <a className="nav-link ativo fs-6 pe-2" href='#'>Inicio</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="nav-link fs-6 pe-2" href='#servicos'>Serviços</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="nav-link fs-6 pe-2" href='#'>Sobre nós</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="nav-link fs-6 pe-2" href='#'>Contato</a>
                        </li>
                    </ul>
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
    </section>
    </>
  )
}

export default NavBar
