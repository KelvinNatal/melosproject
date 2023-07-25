import './App.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'aos/dist/aos.css';

import AOS from 'aos';
import Whatsapp from './components/Whatsapp'
import Contato from './containers/Contato'
import Footer from './containers/Footer'
import Header from './containers/Header'
import NavBar from './containers/NavBar'
import Servicos from './containers/Servicos'
import SobreNos from './containers/SobreNos'

import React, { useEffect } from 'react'

function App() {

  useEffect(() => {
    // Atualiza o título do documento usando a API do browser
    AOS.init({ duration: 1000 });
  });

  return (
    <>
      <div className='main' data-bs-spy="scroll" data-bs-target=".main">
        <NavBar/>
        <Header/>
        
        <Servicos/>
        <SobreNos/> 
        <Contato/>

        <Footer/>
        <Whatsapp/>
      </div>
    </>
  )
}

export default App
