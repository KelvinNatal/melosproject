import React from 'react'
import InformacoesComponent from '../components/InformacoesComponent'

const Desdobro = () => {

    const informacoes = {
        title: "",
        subtitle: "Desdobro de Lotes",
        text: 'O desdobro de lotes é o processo de subdivisão de um terreno em lotes menores, de acordo com as normas e regulamentos municipais.',
        text2: 'Tendo implicações legais e técnicas, envolvendo a elaboração de projetos, a obtenção de autorizações e a regularização dos novos lotes criados. Sendo necessário seguir os requisitos estabelecidos pela prefeitura ou órgão competente, que podem incluir a definição de metragens mínimas, largura das vias, áreas de recuo, entre outros critérios. Além disso, também pode ser exigido o cumprimento de aspectos relacionados à infraestrutura, como a disponibilidade de água, energia elétrica e esgotamento sanitário.'
    }
    
      return (
        <section id="desdobro">
            <InformacoesComponent {...informacoes}/>
        </section>
      )
}

export default Desdobro