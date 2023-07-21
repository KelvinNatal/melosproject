import React from 'react'
import InformacoesComponent from '../components/InformacoesComponent'

const Licenca = () => {

    const informacoes = {
        title: "",
        subtitle: "Licenças de Funcionamento",
        text: 'Licenças de Funcionamento são autorizações emitidas pelos órgãos competentes para permitir o exercício de atividades comerciais ou industriais em determinados estabelecimentos, assegurando o cumprimento de normas de segurança, saúde pública, meio ambiente e demais regulamentações aplicáveis.',
        text2: 'Essas licenças são essenciais para garantir que as operações realizadas no local atendam aos requisitos legais e que a atividade seja desenvolvida de forma segura e em conformidade com as políticas municipais.'
    }
    
      return (
        <section id="licenca">
            <InformacoesComponent {...informacoes}/>
        </section>
      )
}

export default Licenca