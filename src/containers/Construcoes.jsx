import React from 'react'
import InformacoesComponent from '../components/InformacoesComponent'

const Construcoes = () => {

    const informacoes = {
        title: "",
        subtitle: "Construções e Reformas",
        text: 'Construções e reformas são processos que envolvem o planejamento, projeto, execução e controle de obras civis. Isso inclui a construção de novas estruturas e a reforma, ampliação ou renovação de estruturas existentes. Aspectos como viabilidade, seleção de materiais, gestão de recursos humanos e financeiros, supervisão da obra e conformidade com normas técnicas são considerados. O objetivo é atender às necessidades dos usuários, garantindo segurança, durabilidade, conforto e estética, e contribuindo para o desenvolvimento e transformação do ambiente construído.'
    }
    
      return (
        <section id="construcoes">
            <InformacoesComponent {...informacoes}/>
        </section>
      )
}

export default Construcoes