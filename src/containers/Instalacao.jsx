import React from 'react'
import InformacoesComponent from '../components/InformacoesComponent'

const Instalacao = () => {

    const informacoes = {
        title: "",
        subtitle: "Instalações Elétricas",
        text: 'instalações elétricas são, sistemas projetados e executados para prover abastecimento e distribuição de energia elétrica e iluminação em edificações. As instalações elétricas envolvem a distribuição de energia elétrica por meio de circuitos, cabos, disjuntores e dispositivos de proteção, além da instalação de luminárias e equipamentos elétricos necessários. Essas instalações devem ser projetadas em conformidade com normas técnicas, levando em consideração a demanda, a eficiência energética, a segurança e a praticidade para os usuários.'
    }
    
      return (
        <section id="instalacao">
            <InformacoesComponent {...informacoes}/>
        </section>
      )
}

export default Instalacao