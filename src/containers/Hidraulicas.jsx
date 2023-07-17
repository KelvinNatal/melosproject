import React from 'react'
import InformacoesComponent from '../components/InformacoesComponent'

const Hidraulicas = () => {

    const informacoes = {
        title: "",
        subtitle: "Instalações Hidráulicas",
        text: 'Instalações hidráulicas são, sistemas projetados e executados para prover abastecimento de água, escoamento de esgoto em edificações. As instalações hidráulicas compreendem tubulações, conexões e equipamentos para garantir o fornecimento adequado de água potável, bem como a coleta e o tratamento do esgoto. Essas instalações devem ser projetadas em conformidade com normas técnicas, levando em consideração a demanda, a eficiência energética, a segurança e a praticidade para os usuários.'
    }
    
      return (
        <section id="">
            <InformacoesComponent {...informacoes}/>
        </section>
      )
}

export default Hidraulicas