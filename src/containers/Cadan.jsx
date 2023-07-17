import React from 'react'
import InformacoesComponent from '../components/InformacoesComponent'

const Cadan = () => {

    const informacoes = {
        title: "",
        subtitle: "Cadan",
        text: 'O CADAN (Cadastro Ambiental de Empreendimentos) é um registro obrigatório para empreendimentos de engenharia civil que possuem potencial poluidor ou degradador do meio ambiente. Esse cadastro tem o objetivo de promover o controle ambiental, permitindo o monitoramento e a fiscalização dessas atividades, além de garantir a conformidade com a legislação ambiental vigente.'
    }
    
      return (
        <section id="cadan">
            <InformacoesComponent {...informacoes}/>
        </section>
      )
}

export default Cadan