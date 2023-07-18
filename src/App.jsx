import './App.css'
import Whatsapp from './components/Whatsapp'
import Bombeiro from './containers/Bombeiro'
import Cadan from './containers/Cadan'
import Calculo from './containers/Calculo'
import Construcoes from './containers/Construcoes'
import Contato from './containers/Contato'
import Desdobro from './containers/Desdobro'
import Edificacao from './containers/Edificacao'
import Footer from './containers/Footer'
import Habite from './containers/Habite'
import Header from './containers/Header'
import Hidraulicas from './containers/Hidraulicas'
import Instalacao from './containers/Instalacao'
import Laudos from './containers/Laudos'
import Licenca from './containers/Licenca'
import Muro from './containers/Muro'
import NavBar from './containers/NavBar'
import Projetos from './containers/Projetos'
import Servicos from './containers/Servicos'

function App() {

  return (
    <>
      <div className='main'>
        <NavBar/>
        <Header/>
        
        <Servicos/>
        {/* <Habite/>
        <Desdobro/>
        <Licenca/>
        <Cadan/>
        <Bombeiro/>
        <Edificacao/>
        <Projetos/>
        <Calculo/>
        <Muro/>
        <Instalacao/>
        <Hidraulicas/>
        <Construcoes/>
        <Laudos/> */}

        <Contato/>

        <Footer/>
        <Whatsapp/>
      </div>
    </>
  )
}

export default App
