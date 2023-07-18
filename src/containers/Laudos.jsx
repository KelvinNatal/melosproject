import React from 'react'
import InformacoesComponent from '../components/InformacoesComponent'

const Laudos = () => {

    const informacoes = {
        title: "",
        subtitle: "Laudos Técnicos",
        text: 'Os laudos técnicos são documentos elaborados por profissionais especializados que contêm avaliações, análises e pareceres técnicos, condição ou problema em uma edificação ou obra. Esses laudos são baseados em inspeções, medições, testes e estudos realizados, visando fornecer informações objetivas e embasadas sobre a segurança estrutural, a qualidade, a funcionalidade, a conformidade com normas e regulamentos, e possíveis soluções para problemas identificados.'
    }
    
      return (
        <section id="">
            <InformacoesComponent {...informacoes}/>
        </section>
      )
}

export default Laudos