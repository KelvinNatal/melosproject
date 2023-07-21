import React from 'react'
import InformacoesComponent from '../components/InformacoesComponent'

const Projetos = () => {

    const informacoes = {
        title: "",
        subtitle: "Projetos Arquitetônicos",
        text: 'Os projetos arquitetônicos na engenharia civil são documentos elaborados por arquitetos que representam, de forma detalhada, o planejamento e a concepção de uma edificação ou espaço construído. Eles englobam elementos como plantas, cortes, fachadas, detalhamentos e especificações técnicas, buscando traduzir as necessidades funcionais, estéticas e de conforto dos usuários, além de respeitar as normas e regulamentos vigentes. Os projetos arquitetônicos servem como base para a execução da obra, garantindo a correta materialização do projeto e a harmonia entre forma, função e contexto.'
    }
    
      return (
        <section id="projetos">
            <InformacoesComponent {...informacoes}/>
        </section>
      )
}

export default Projetos