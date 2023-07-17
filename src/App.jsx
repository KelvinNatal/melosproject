import './App.css'
import Header from './containers/Header'
import NavBar from './containers/NavBar'
import Servicos from './containers/Servicos'

function App() {

  return (
    <>
      <div className='main'>
        <NavBar/>
        <Header/>
        <Servicos/>
      </div>
    </>
  )
}

export default App
