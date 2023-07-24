import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import InformacoesComponent from '../components/InformacoesComponent'
import { Navigation, Pagination, A11y } from 'swiper/modules';
import '../styles/containers/Servicos.css'


const Servicos = () => {

const informacoesUp = [
  {
    title: "SERVIÇOS",
    subtitle: "Regularição e Aprovações PMSP",
    text: "A regularização e aprovações junto à Prefeitura Municipal de São Paulo (PMSP) são processos essenciais para garantir a conformidade legal e a autorização necessária para diversos tipos de atividades e empreendimentos na cidade. Envolvendo o cumprimento de normas e regulamentos municipais, como o Código de Obras e Edificações, o Plano Diretor Estratégico e outras legislações específicas.",
  },
  {
    title: "SERVIÇOS2",
    subtitle: "Regularição e Aprovações PMSP2",
    text: "A regularização e aprovações junto à Prefeitura Municipal de São Paulo (PMSP) são processos essenciais para garantir a conformidade legal e a autorização necessária para diversos tipos de atividades e empreendimentos na cidade. Envolvendo o cumprimento de normas e regulamentos municipais, como o Código de Obras e Edificações, o Plano Diretor Estratégico e outras legislações específicas.",
  },
  {
    title: "SERVIÇOS",
    subtitle: "Regularição e Aprovações PMSP3",
    text: "A regularização e aprovações junto à Prefeitura Municipal de São Paulo (PMSP) são processos essenciais para garantir a conformidade legal e a autorização necessária para diversos tipos de atividades e empreendimentos na cidade. Envolvendo o cumprimento de normas e regulamentos municipais, como o Código de Obras e Edificações, o Plano Diretor Estratégico e outras legislações específicas.",
  },
  {
    title: "SERVIÇOS",
    subtitle: "Regularição e Aprovações PMSP3",
    text: "A regularização e aprovações junto à Prefeitura Municipal de São Paulo (PMSP) são processos essenciais para garantir a conformidade legal e a autorização necessária para diversos tipos de atividades e empreendimentos na cidade. Envolvendo o cumprimento de normas e regulamentos municipais, como o Código de Obras e Edificações, o Plano Diretor Estratégico e outras legislações específicas.",
  },
]
   

const informacoesDown = [
  {
    title: "SERVIÇOS4",
    subtitle: "Regularição e Aprovações PMSP",
    text: "A regularização e aprovações junto à Prefeitura Municipal de São Paulo (PMSP) são processos essenciais para garantir a conformidade legal e a autorização necessária para diversos tipos de atividades e empreendimentos na cidade. Envolvendo o cumprimento de normas e regulamentos municipais, como o Código de Obras e Edificações, o Plano Diretor Estratégico e outras legislações específicas.",
  },
  {
    title: "SERVIÇOS5",
    subtitle: "Regularição e Aprovações PMSP",
    text: "A regularização e aprovações junto à Prefeitura Municipal de São Paulo (PMSP) são processos essenciais para garantir a conformidade legal e a autorização necessária para diversos tipos de atividades e empreendimentos na cidade. Envolvendo o cumprimento de normas e regulamentos municipais, como o Código de Obras e Edificações, o Plano Diretor Estratégico e outras legislações específicas.",
  },
  {
    title: "SERVIÇOS6",
    subtitle: "Regularição e Aprovações PMSP",
    text: "A regularização e aprovações junto à Prefeitura Municipal de São Paulo (PMSP) são processos essenciais para garantir a conformidade legal e a autorização necessária para diversos tipos de atividades e empreendimentos na cidade. Envolvendo o cumprimento de normas e regulamentos municipais, como o Código de Obras e Edificações, o Plano Diretor Estratégico e outras legislações específicas.",
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
                                  <div onMouseOver={() => setVisivelUp(true)} className='image-background w-100 m-lg-5 w-lg-75 mt-5 d-flex flex-column-reverse rounded-3 z-2'>
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
                                        <h1 className='fs-2 pe-2 text-light'>Habite-se</h1>
                                        <div className='title-badge'></div>
                                    </div> 
                                    <div className='col-12 col-lg-8 d-flex justify-content-center mb-1 z-2'>
                                        <div onMouseOver={() => setVisivelDown(true)} className='image-background w-100 m-lg-5 w-lg-75 mt-5 mt-5 d-flex flex-column-reverse rounded-3 z-2'>
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
    </section>
  )
}

export default Servicos
