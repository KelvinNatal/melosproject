import React from 'react'
import InformacoesComponent from '../components/InformacoesComponent'

const Habite = () => {

    const informacoes = {
        title: "",
        subtitle: "Habite-se",
        text: 'O habite-se é o documento que atesta a regularidade e a conclusão de uma obra de engenharia civil, também conhecido como "Certificado de Conclusão" ou "Auto de Conclusão", é um documento emitido pela autoridade municipal competente, geralmente a prefeitura, que comprova que uma construção foi executada de acordo com as normas e regulamentos vigentes.',
        text2: 'Esse documento é necessário para comprovar a legalidade da edificação e para obter a devida autorização para o uso habitacional ou comercial do imóvel.'
    }
    
      return (
        <section id="habite">
            <InformacoesComponent {...informacoes}/>
        </section>
      )
}

export default Habite