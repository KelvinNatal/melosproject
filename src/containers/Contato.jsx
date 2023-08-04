import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import '../styles/containers/Contato.css'


import { MdLocationPin } from 'react-icons/md';
import { AiFillMail } from 'react-icons/ai';
import { RiWhatsappFill } from 'react-icons/ri';
import { BsWhatsapp, BsFacebook, BsInstagram, BsTelephoneFill} from 'react-icons/bs'

const Contato = () => {

    const [name, setName] = useState('');  
    const [telefone, setTelefone] = useState('');  
    const [email, setEmail] = useState('');  
    const [servico, setServico] = useState('');  

    const [buttonText, setButtonText] = useState('Enviar');

    const sendEmail = async (e) => {
        e.preventDefault();
        setButtonText('Enviando...');
    
        const templateParams = {
            from_name: name,
            email: email,
            telefone: telefone,
            servico: servico, 
        }
       
        if(name === '' || email === '' || telefone === '' || servico === ''){
            alert('Preencha todos os campos');
            return;
        }
    
        setButtonText("Enviado!");
        emailjs.send("service_ow9mmm6", "template_08xxg9e", templateParams,"O7cCEfdGkt7fEq0KM")
        .then((response) => {
            setName('')
            setEmail('')
            setTelefone('')
            setServico('')
        }, (err) => {
            console.log('ERRO: ', err)
        })
      }

  return (
    <section id="contacto">
        <div className='contato-content p-lg-5 d-flex justify-content-center'>
            <div className='container d-flex justify-content-center m-lg-5'>
                <div className="left-row row m-4 col-12 col-lg-10">
                    <div className='contato-right col-lg-6 bg-white pe-4 rounded-4' data-aos="fade-up">
                        <div className='row'>         
                            <form className='col-12 d-flex flex-column justify-content-lg-center align-items-lg-center ms-1' onSubmit={sendEmail}>
                                <div className="col-12 d-flex justify-content-center mb-5 mb-lg-0">
                                    <h1 className='fs-5 mt-3 mb-lg-5 mb-0 text-black'>Fale Conosco</h1>    
                                </div> 
                                <div className='col-12 d-flex flex-column flex-lg-row'>
                                    <div class="form-floating col-lg-6 col-12 mb-lg-3 ps-1">
                                        <input
                                        type="text"
                                        class="form-control" 
                                        id="floatingInput"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                        />
                                        <label for="floatingInput">Nome</label>
                                    </div>
                                    <div class="form-floating col-lg-6 col-12 mb-lg-3 mt-4 mt-lg-0 ps-1">
                                        <input 
                                        type="text" 
                                        class="form-control" 
                                        id="floatingInput"
                                        onChange={(e) => setTelefone(e.target.value)}
                                        value={telefone} />
                                        <label for="floatingInput">Telefone</label>
                                    </div>   
                                </div>
                                <div class="form-floating col-12 mb-lg-3 mt-4 mt-lg-1 ps-1">
                                    <input 
                                    type="email"
                                    class="form-control" 
                                    id="floatingInput"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email} />
                                    <label for="floatingInput">E-mail</label>
                                </div>   
                                <div class="input-group mt-4 mt-lg-1 ps-1">
                                    <select 
                                    className="form-select p-3"
                                    id="inputGroupSelect01"
                                    onChange={(e) => setServico(e.target.value)}>
                                        <option selected>Serviço interessado...</option>
                                        <option value={'Regularização e Aprovações PMSP'}>Regularização e Aprovações PMSP</option>
                                        <option value={"Habite-se"}>Habite-se</option>
                                        <option value={"Desdobro de Lotes"}>Desdobro de Lotes</option>
                                        <option value={"Licenças de Funcionamento"}>Licenças de Funcionamento</option>
                                        <option value={"Cadan"}>Cadan</option>
                                        <option value={"Bombeiro/AVCB"}>Bombeiro/AVCB</option>
                                        <option value={"Edificações e Obras"}>Edificações e Obras</option>
                                        <option value={"Projetos Arquitetônicos"}>Projetos Arquitetônicos</option>
                                        <option value={"Calculo Estrutural"}>Calculo Estrutural</option>
                                        <option value={"Muro de Arrimo"}>Muro de Arrimo</option>
                                        <option value={"Instalações Elétricas"}>Instalações Elétricas</option>
                                        <option value={"Instalações Hidráulicas"}>Instalações Hidráulicas</option>
                                        <option value={"Construções e Reformas"}>Construções e Reformas</option>
                                        <option value={"Laudos Técnicos"}>Laudos Técnicos</option>
                                    </select>
                                </div>
                                <div class="form-floating col-12 mb-lg-3 ps-1 d-flex justify-content-center">
                                    <button className="button-contato mt-4 mb-4 mb-lg-0" type="submit">{buttonText}</button>
                                </div>        
                            </form>                       
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 d-flex justify-content-center flex-direction-column" data-aos="fade-left">
                        <div className='contato-div mt-5 mt-lg-3'>
                            <h1 className='fs-3 mb-5'>Informações de contato</h1>
                            <ul className="contact-list d-flex flex-column align-items-start justify-content-center pt-3">
                                <li className="mb-3"><MdLocationPin className='contato-icon me-5'/><span className="contact-text place fw-semibold">São Paulo, SP</span></li>
                                
                                <li className="mb-3"><BsTelephoneFill className='contato-icon me-5'/><span className="fw-semibold"><a href="tel:1125615037" title="Mande uma mensagem">(11) 2561-5037</a></span></li>
                                
                                <li className="mb-3"><RiWhatsappFill className='contato-icon me-5'/><span className="fw-semibold"><a href="https://wa.me/5511947712745" title="Mande uma mensagem" target="_blank" rel="noopener noreferrer" >(11) 9 4771-2745</a></span></li>

                                <li className="mb-3"><AiFillMail className='contato-icon me-5'/><span className="fw-semibold"><a href="mailto:contato@melosengenharia.com" title="Me envie um E-mail">contato@melosengenharia.com</a></span></li>   
                            </ul>
                            <hr/>
                                <ul className="d-flex align-items-center justify-content-center z-1">
                                    <li className="nav-item contato-icon-li p-2">
                                        <a href='https://api.whatsapp.com/send?phone=11947712745' target="_blank" rel="noopener noreferrer"><BsWhatsapp className='fs-4'/></a>
                                    </li>
                                    <li className="nav-item contato-icon-li p-2">
                                        <a href='#'><BsFacebook className='fs-4'/></a>
                                    </li>
                                    <li className="nav-item contato-icon-li p-2">
                                        <a href='https://instagram.com/melosengenharia23?igshid=MzRlODBiNWFlZA==' target="_blank" rel="noopener noreferrer" ><BsInstagram className='fs-4'/></a>
                                    </li>
                                </ul>
                            <hr/>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contato