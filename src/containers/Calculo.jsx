import React from 'react'
import InformacoesComponent from '../components/InformacoesComponent'

const Calculo = () => {

    const informacoes = {
        title: "",
        subtitle: "Cálculo estrutural",
        text: 'O cálculo estrutural é uma etapa fundamental da engenharia civil que envolve análises e dimensionamentos para determinar as forças, tensões e deformações que atuam em uma estrutura, como prédios, pontes e outras construções. Por meio de cálculos matemáticos e análise estrutural, são definidos os materiais, as seções e as disposições construtivas adequadas para garantir a segurança, a estabilidade e a resistência da estrutura frente às cargas e condições de uso. O cálculo estrutural considera os princípios da mecânica e as normas técnicas específicas, assegurando uma estrutura segura e confiável.'
    }
    
      return (
        <section id="calculo">
            <InformacoesComponent {...informacoes}/>
        </section>
      )
}

export default Calculo