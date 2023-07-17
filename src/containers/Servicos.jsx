import React from 'react'
import InformacoesComponent from '../components/InformacoesComponent'

const Servicos = () => {

const informacoes = {
    title: "SERVIÇOS",
    subtitle: "Regularição e Aprovações PMSP",
    text: "A regularização e aprovações junto à Prefeitura Municipal de São Paulo (PMSP) são processos essenciais para garantir a conformidade legal e a autorização necessária para diversos tipos de atividades e empreendimentos na cidade.",
    text2: "A regularização junto à PMSP envolve o cumprimento de normas e regulamentos municipais, como o Código de Obras e Edificações, o Plano Diretor Estratégico e outras legislações específicas. Essas regulamentações abrangem aspectos como uso do solo, padrões de construção, preservação do meio ambiente, acessibilidade, entre outros."
}

  return (
    <section id="servicos">
        <InformacoesComponent {...informacoes}/>
    </section>
  )
}

export default Servicos
