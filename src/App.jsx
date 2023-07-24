import './App.css'
import Whatsapp from './components/Whatsapp'
import Contato from './containers/Contato'
import Footer from './containers/Footer'
import Header from './containers/Header'
import NavBar from './containers/NavBar'
import Servicos from './containers/Servicos'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SobreNos from './containers/SobreNos'

function App() {

  return (
    <>
      <div className='main'>
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
