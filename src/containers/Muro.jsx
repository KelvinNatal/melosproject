import React from 'react'
import InformacoesComponent from '../components/InformacoesComponent'

const Muro = () => {

    const informacoes = {
        title: "",
        subtitle: "Muro de Arrimo",
        text: 'O Muro de Arrimo é uma estrutura projetada e construída para conter e estabilizar um terreno, evitando deslizamentos de terra ou erosões. Geralmente utilizado em terrenos com diferenças de nível ou declividades acentuadas, o muro de arrimo possui um sistema de fundação e elementos estruturais capazes de suportar as pressões do solo, proporcionando estabilidade e segurança. A escolha do tipo de muro de arrimo e os cálculos necessários levam em consideração as características do terreno, a altura do muro, as cargas atuantes e as condições geotécnicas, garantindo a adequada contenção do solo e prevenindo riscos de deslizamentos e desmoronamentos.'
    }
    
      return (
        <section id="">
            <InformacoesComponent {...informacoes}/>
        </section>
      )
}

export default Muro