import React from 'react'
import InformacoesComponent from '../components/InformacoesComponent'

const Edificacao = () => {

    const informacoes = {
        title: "",
        subtitle: "Edificações e Obras",
        text: 'As edificações e obras abrangem a construção, reforma, ampliação ou qualquer intervenção realizada em estruturas físicas, como prédios, casas, pontes, estradas, entre outros. Essas atividades envolvem o planejamento, projeto, execução e controle de todas as etapas do processo construtivo, incluindo aspectos como fundações, estruturas, instalações elétricas e hidrossanitárias, revestimentos, acabamentos, entre outros. O objetivo é garantir a segurança, a funcionalidade, a durabilidade e a qualidade das edificações e obras, levando em consideração normas técnicas, regulamentos municipais e boas práticas de engenharia.'
    }
    
      return (
        <section id="edificacao">
            <InformacoesComponent {...informacoes}/>
        </section>
      )
}

export default Edificacao