import React from 'react'
import { useState } from 'react';

import '../styles/components/Informacoes.css'

const InformacoesComponent = ({title, image, subtitle, text}) => {

const [visivel, setVisivel] = useState(false);

  return (
    <section id="servicos">
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 d-flex flex-column align-items-center justify-content-center p-5'>
                    <h1>{title}</h1>
                    <div onMouseOver={() => setVisivel(true)} className='image-background w-75 mt-5 d-flex flex-column-reverse'>
                        <div className="d-flex w-75">
                            <h1 className={visivel ? 'ps-4 mb-4 p-1 subTitle-background invisivel' : 'ps-4 mb-4 p-1 subTitle-background'}>{subtitle}</h1>
                        </div>    
                        <div onMouseLeave={() => setVisivel(false)} className={visivel ? 'hover-content p-3': 'hover-content p-3 invisivel'}>
                            <h3 className='fs-4 pt-2'>{subtitle}</h3>
                            <p className='ps-3 fs-5 pt-3'>{text}</p>
                        </div>
                    </div>         
                </div>    
            </div>
        </div>
    </section>
  )
}

export default InformacoesComponent
