import React from 'react'
import { useState } from 'react';

import imagem from '../assets/logo.png'

import '../styles/components/Informacoes.css'

const InformacoesComponent = ({title, image, subtitle, text, text2}) => {

const [visivel, setVisivel] = useState(false);

  return (
        <div className='container'>
            <div className='row'>
                <div className='servicos-background mb-5 mt-5 rounded-5'>
                    <div className='col-12 d-flex align-items-center justify-content-center mt-5 flex-column z-2'>
                        <h1 className='text-light z-1'>{title}</h1>
                        <div className='title-servicos-badge z-0'></div>
                        <p className='text-white-50 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                        <div className='col-12 d-flex align-items-center justify-content-center mt-5 z-2'>
                            <div className='col-8 d-flex align-items-center justify-content-center mt-4'>
                                <div onMouseOver={() => setVisivel(true)} className='image-background w-75 mt-5 d-flex flex-column-reverse rounded-3 z-2'>
                                    <div className="d-flex w-100">
                                        <h1 className={visivel ? 'ps-4 mb-4 p-1 subTitle-background invisivel' : 'ps-4 mb-5 p-1 fs-2 subTitle-background'}>{subtitle}</h1>
                                    </div>    
                                    <div onMouseLeave={() => setVisivel(false)} className={visivel ? 'hover-content p-3 rounded-3': 'hover-content p-3 invisivel'}>
                                        <h3 className='fs-4 pt-2'>{subtitle}</h3>
                                        <p className='ps-3 fs-6 pt-1'>{text}</p>
                                    </div>
                                </div>         
                            </div>  
                            <div className='col-4 d-flex justify-content-start align-items-center'>
                                <div className='title-badge'></div>
                                <h1 className='fs-2 ps-2 text-light'>Regularização e Aprovações PMSP</h1>
                            </div> 
                        </div>
                        <div className='col-12 d-flex align-items-center justify-content-end pb-5'>
                            <div className='col-4 d-flex justify-content-end align-items-center'>
                                <h1 className='fs-2 pe-2 text-light'>Habite-se</h1>
                                <div className='title-badge'></div>
                            </div> 
                            <div className='col-8 d-flex justify-content-center align-items-center pb-5 z-2'>
                                <div onMouseOver={() => setVisivel(true)} className='image-background w-75 mt-5 d-flex flex-column-reverse rounded-3 z-2'>
                                    <div className="d-flex w-100 justify-content-end">
                                        <h1 className={visivel ? 'pe-4 mb-4 p-1 subTitle-background invisivel ' : 'ps-2 pe-4 mb-5 p-1 fs-2 subTitle-background'}>{subtitle}</h1>
                                    </div>    
                                    <div onMouseLeave={() => setVisivel(false)} className={visivel ? 'hover-content p-3 rounded-3': 'hover-content p-3 invisivel '}>
                                        <h3 className='fs-4 pt-2'>{subtitle}</h3>
                                        <p className='ps-3 fs-6 pt-1'>{text}</p>
                                    </div>
                                </div>         
                            </div>   
                        </div>
                </div>
            </div>
        </div>
  )
}

export default InformacoesComponent
