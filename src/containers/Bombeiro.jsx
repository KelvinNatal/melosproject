import React from 'react'
import InformacoesComponent from '../components/InformacoesComponent'

const Bombeiro = () => {

    const informacoes = {
        title: "",
        subtitle: "Bombeiro/AVCB",
        text: 'O AVCB (Auto de Vistoria do Corpo de Bombeiros) é um documento emitido pelo Corpo de Bombeiros que atesta que uma edificação possui as condições de segurança contra incêndio e pânico exigidas pela legislação. Esse documento é fundamental para garantir a segurança das pessoas que frequentam o local, bem como para obter a regularidade perante os órgãos competentes e possibilitar o funcionamento do empreendimento. O AVCB é obtido por meio de vistorias técnicas e análises que verificam a adequação das medidas preventivas, como sistema de combate a incêndio, sinalização, iluminação de emergência, entre outros requisitos estabelecidos pelas normas de segurança.'
    }
    
      return (
        <section id="bombeiro">
            <InformacoesComponent {...informacoes}/>
        </section>
      )
}

export default Bombeiro