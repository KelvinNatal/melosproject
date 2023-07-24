import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import InformacoesComponent from '../components/InformacoesComponent'
import { Navigation, Pagination, A11y } from 'swiper/modules';

import image from '../assets/2.png'
import image2 from '../assets/3Novo.png'
import image3 from '../assets/4.png'
import image4 from '../assets/5.png'
import image5 from '../assets/6.png'
import image6 from '../assets/7.png'
import image7 from '../assets/8.png'
import image8 from '../assets/9.png'
import image9 from '../assets/10.png'
import image10 from '../assets/11.png'
import image11 from '../assets/12.png'
import image12 from '../assets/13.png'
import image13 from '../assets/14.png'
import image14 from '../assets/15.png'
import '../styles/containers/Servicos.css'

const Servicos = () => {

const informacoesUp = [
  {
    subtitle: "Regularição e Aprovações PMSP",
    text: "A regularização e aprovações junto à Prefeitura Municipal de São Paulo (PMSP) são processos essenciais para garantir a conformidade legal e a autorização necessária para diversos tipos de atividades e empreendimentos na cidade. Envolvendo o cumprimento de normas e regulamentos municipais, como o Código de Obras e Edificações, o Plano Diretor Estratégico e outras legislações específicas.",
    imagem: image
  },
  {
    subtitle: "Habite-se",
    text: 'O habite-se é o documento que atesta a regularidade e a conclusão de uma obra de engenharia civil, também conhecido como "Certificado de Conclusão" ou "Auto de Conclusão", é um documento emitido pela autoridade municipal competente, geralmente a prefeitura, que comprova que uma construção foi executada de acordo com as normas e regulamentos vigentes. Sendo necessário para comprovar a legalidade da edificação e para obter a devida autorização para o uso habitacional ou comercial do imóvel.',
    imagem: image2
  },
  {
    subtitle: "Desdobro de Lotes",
    text: "O desdobro de lotes é o processo de subdivisão de um terreno em lotes menores, de acordo com as normas e regulamentos municipais. Tendo implicações legais e técnicas, envolvendo a elaboração de projetos, a obtenção de autorizações e a regularização dos novos lotes criados. Sendo necessário seguir os requisitos estabelecidos pela prefeitura ou órgão competente. Além disso, também pode ser exigido o cumprimento de aspectos relacionados à infraestrutura, como a disponibilidade de água, energia elétrica e esgotamento sanitário.",
    imagem: image3
  },
  {
    subtitle: "Licenças de Funcionamento",
    text: "Licenças de Funcionamento são autorizações emitidas pelos órgãos competentes para permitir o exercício de atividades comerciais ou industriais em determinados estabelecimentos, assegurando o cumprimento de normas de segurança, saúde pública, meio ambiente e demais regulamentações aplicáveis. Sendo essencial para garantir que as operações realizadas no local atendam aos requisitos legais e que a atividade seja desenvolvida de forma segura e em conformidade com as políticas municipais.",
    imagem: image4
  },
  {
    subtitle: "Cadan",
    text: "O CADAN (Cadastro Ambiental de Empreendimentos) é um registro obrigatório para empreendimentos de engenharia civil que possuem potencial poluidor ou degradador do meio ambiente. Esse cadastro tem o objetivo de promover o controle ambiental, permitindo o monitoramento e a fiscalização dessas atividades, além de garantir a conformidade com a legislação ambiental vigente.",
    imagem: image5
  },
  {
    subtitle: "Bombeiro/AVCB",
    text: "O AVCB (Auto de Vistoria do Corpo de Bombeiros) é um documento emitido pelo Corpo de Bombeiros que atesta que uma edificação possui as condições de segurança contra incêndio e pânico exigidas pela legislação. Sendo fundamental para garantir a segurança das pessoas que frequentam o local, bem como para obter a regularidade perante os órgãos competentes. É obtido por meio de vistorias técnicas e análises que verificam a adequação das medidas preventivas, como sistema de combate a incêndio, sinalização, iluminação de emergência, entre outros requisitos.",
    imagem: image6
  },
  {
    subtitle: "Edificações e Obras",
    text: "As edificações e obras abrangem a construção, reforma, ampliação ou qualquer intervenção realizada em estruturas físicas, como prédios, casas, pontes, estradas, entre outros. Envolvendo o planejamento, projeto, execução e controle de todas as etapas do processo construtivo, como fundações, estruturas, instalações elétricas e hidro sanitárias, entre outros. Para garantir a segurança, a funcionalidade, a durabilidade e a qualidade das edificações e obras.",
    imagem: image7
  }
]
   

const informacoesDown = [
  {
    subtitle: "Projetos Arquitetônicos",
    text: "Os projetos arquitetônicos na engenharia civil são documentos elaborados por arquitetos que representam, de forma detalhada, o planejamento e a concepção de uma edificação ou espaço construído. Tendo elementos como plantas, cortes, fachadas, detalhamentos e especificações técnicas, buscando traduzir as necessidades funcionais, estéticas e de conforto dos usuários, respeitando normas e regulamentos vigentes. Servindo como base para a execução da obra, garantindo a correta materialização do projeto e a harmonia entre forma, função e contexto.",
    imagem: image8
  },
  {
    subtitle: "Cálculo estrutural",
    text: "O cálculo estrutural é uma etapa fundamental da engenharia civil que envolve análises e dimensionamentos para determinar as forças, tensões e deformações que atuam em uma estrutura, como prédios, pontes e outras construções. Através cálculos matemáticos e análise estrutural, são definidos os materiais, as seções e as disposições construtivas adequadas para garantir a segurança, a estabilidade e a resistência da estrutura.",
    imagem: image9
  },
  {
    subtitle: "Muro de Arrimo",
    text: "O Muro de Arrimo é uma estrutura projetada e construída para conter e estabilizar um terreno, evitando deslizamentos de terra ou erosões. Utilizado em terrenos com diferenças de nível ou declividades acentuadas, o muro de arrimo possui um sistema de fundação e elementos estruturais capazes de suportar as pressões do solo, proporcionando estabilidade e segurança. A escolha do tipo de muro de arrimo garantem a adequada contenção do solo e prevenindo riscos de deslizamentos e desmoronamentos.",
    imagem: image10
  },
  {
    subtitle: "Instalações Elétricas",
    text: "instalações elétricas são, sistemas projetados e executados para prover abastecimento e distribuição de energia elétrica e iluminação em edificações. As instalações elétricas envolvem a distribuição de energia elétrica por meio de circuitos, cabos, disjuntores e dispositivos de proteção, além da instalação de luminárias e equipamentos elétricos necessários. Essas instalações devem ser projetadas em conformidade com normas técnicas, levando em consideração a demanda, a eficiência energética, a segurança e a praticidade para os usuários.",
    imagem: image11
  },
  {
    subtitle: "Instalações Hidráulicas",
    text: "Instalações hidráulicas são, sistemas projetados e executados para prover abastecimento de água, escoamento de esgoto em edificações. As instalações hidráulicas compreendem tubulações, conexões e equipamentos para garantir o fornecimento adequado de água potável, bem como a coleta e o tratamento do esgoto. Essas instalações devem ser projetadas em conformidade com normas técnicas, levando em consideração a demanda, a eficiência energética, a segurança e a praticidade para os usuários.",
    imagem: image12
  },
  {
    subtitle: "Construções e Reformas",
    text: "Construções e reformas são processos que envolvem o planejamento, projeto, execução e controle de obras civis. Isso inclui a construção de novas estruturas e a reforma, ampliação ou renovação de estruturas existentes. Aspectos como viabilidade, seleção de materiais, gestão de recursos humanos e financeiros, supervisão da obra e conformidade com normas técnicas são considerados. O objetivo é atender às necessidades dos usuários, garantindo segurança, durabilidade, conforto e estética, e contribuindo para o desenvolvimento e transformação do ambiente construído.",
    imagem: image13
  },
  {
    subtitle: "Laudos Técnicos",
    text: "Os laudos técnicos são documentos elaborados por profissionais especializados que contêm avaliações, análises e pareceres técnicos, condição ou problema em uma edificação ou obra. Esses laudos são baseados em inspeções, medições, testes e estudos realizados, visando fornecer informações objetivas e embasadas sobre a segurança estrutural, a qualidade, a funcionalidade, a conformidade com normas e regulamentos, e possíveis soluções para problemas identificados.",
    imagem: image14
  },
]

  const [width, setWidth] = useState(window.innerWidth);
  const [visivelUp, setVisivelUp] = useState(false);
  const [visivelDown, setVisivelDown] = useState(false);

  const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
  }

  useEffect(() => {
          window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const isMobile = width <= 768;

  return (
    <section id="servicos">
      <div className='background-fundo'>
        <div className='container'>
            <div className='row m-2 m-lg-0'>
                <div className='servicos-background mb-5 mt-5 rounded-4'>
                    <div className='col-12 d-flex align-items-center justify-content-center mt-5 flex-column z-2'>
                        <h1 className='text-light z-1'>Serviços</h1>
                        <div className='title-servicos-badge z-0'></div>
                        <p className='text-white-50 mt-3 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <Swiper
                      modules={[Navigation, Pagination, A11y]}
                      spaceBetween={50}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true }}
                      onSlideChange={() => console.log('slide change')}
                      onSwiper={(swiper) => console.log(swiper)}
                      style={{
                        "--swiper-pagination-color": "var(--c-secundary)",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "10px",
                        "--swiper-pagination-bullet-horizontal-gap": "4px"
                      }}>
                      {informacoesUp.map((informacoes, index) => (
                         <SwiperSlide>
                        <div className='col-12 d-flex align-items-center justify-content-center mt-5 z-2 flex-column-reverse flex-lg-row'>
                              <div className='col-12 col-lg-8 d-flex align-items-center justify-content-center mt-4'>
                                  <div onMouseOver={() => setVisivelUp(true)} className='w-100 m-lg-5 w-lg-75 mt-5 d-flex flex-column-reverse rounded-3 z-2' style={{
                                      background: `linear-gradient(rgba(var(--c-brand-rgb), 0.507), #0000003b), url(${informacoes.imagem})`,
                                      backgroundPosition: 'center',
                                      backgroundSize: 'cover',
                                      height: '300px'
                                  }}>
                                      <div className="d-flex w-100">
                                          <h1 className={visivelUp ? 'ps-4 mb-4 p-1 subTitle-background invisivel' : 'ps-4 mb-5 p-1 fs-2 subTitle-background rounded-end-3'}>{informacoes.subtitle}</h1>
                                      </div>    
                                      <div onMouseLeave={() => setVisivelUp(false)} className={visivelUp ? 'hover-content p-3 rounded-3': 'hover-content p-3 invisivel'}>
                                          <h3 className='fs-4 pt-2 ps-1 mb-3'>{informacoes.subtitle}</h3>
                                          <p className='ps-3 fs-6 pt-1'>{informacoes.text}</p>
                                      </div>
                                  </div>         
                              </div>                      
                              <div className='col-12 col-lg-4 d-flex justify-content-start align-items-center mt-3 mt-lg-0'>
                                  <div className='title-badge'></div>
                                  <h1 className='fs-2 ps-2 text-light'>{informacoes.subtitle}</h1>
                              </div> 
                          </div>
                          </SwiperSlide>
                      ))}
                </Swiper>
                        <Swiper
                            modules={[Navigation, Pagination, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            style={{
                              "--swiper-pagination-color": "var(--c-secundary)",
                              "--swiper-pagination-bullet-inactive-color": "#999999",
                              "--swiper-pagination-bullet-inactive-opacity": "1",
                              "--swiper-pagination-bullet-size": "10px",
                              "--swiper-pagination-bullet-horizontal-gap": "4px"
                            }}>
                          {informacoesDown.map((informacoes, index) => (
                            <SwiperSlide>
                                <div className='col-12 d-flex align-items-center justify-content-end flex-column-reverse flex-lg-row'>
                                    <div className='col-12 col-lg-4 d-flex justify-content-end align-items-center m-4 m-lg-0'>
                                        <h1 className='fs-2 ms-5 text-light'>{informacoes.subtitle}</h1>
                                        <div className='title-badge ms-2'></div>
                                    </div> 
                                    <div className='col-12 col-lg-8 d-flex justify-content-center mb-1 z-2'>
                                        <div onMouseOver={() => setVisivelDown(true)} className='w-100 m-lg-5 w-lg-75 mt-5 mt-5 d-flex flex-column-reverse rounded-3 z-2'style={{
                                      background: `linear-gradient(rgba(var(--c-brand-rgb), 0.507), #0000003b),url(${informacoes.imagem})`,
                                      backgroundPosition: 'center',
                                      backgroundSize: 'cover',
                                      height: '300px'
                                    }}>
                                            <div className="d-flex w-100 justify-content-end">
                                                <h1 className={visivelDown ? 'pe-4 mb-4 p-1 subTitle-background invisivel' : 'ps-2 pe-4 mb-5 p-1 fs-2 subTitle-background rounded-start-3'}>{informacoes.subtitle}</h1>
                                            </div>    
                                            <div onMouseLeave={() => setVisivelDown(false)} className={visivelDown ? 'hover-content p-3 rounded-3': 'hover-content p-3 invisivel'}>
                                                <h3 className='fs-4 pt-2 mb-3'>{informacoes.subtitle}</h3>
                                                <p className='ps-3 fs-6 pt-1'>{informacoes.text}</p>
                                            </div>
                                        </div>         
                                    </div>   
                                </div>
                            </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Servicos
