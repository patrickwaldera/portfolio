import { 
  ContactContainer,
  ContactTitle,
  Wraper,
  LinkedinContainer,
  FormWrapper,
  FormContainer,
  LinkedinBox
} from './styles'

import { IconButton } from '../IconButton'
import send from '../../assets/send.png'
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { CgSpinnerTwoAlt } from "react-icons/cg";
import linkedin2 from '../../assets/linkedin2.png'

const Contact = () => {
  const [ mensagem, setMensagem] = useState('');
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const sendEmail = (data, e) => {
    e.preventDefault();
    setLoading(true)
    emailjs.sendForm('service_whjfgpj', 'template_sa27lpv', e.target, 'wjUdJ8YF_dCjvRneJ')
      .then(
        (result) => {
          console.log(result.text);
          setMensagem('Mensagem enviada com sucesso!')
          setLoading(false)
        },
        (error) => {
          console.log(error.text);
          setMensagem('Houve um erro ao enviar sua mensagem!')
          setLoading(false)
        }
      );
    e.target.reset();
  };

  return (
    <ContactContainer>
        <ContactTitle id='contato'>
          <h3>Contato</h3>
          <p>Entre em contato!</p>
        </ContactTitle>
        <Wraper>
          <LinkedinContainer data-aos="fade-right">
            <p>Vamos nos conectar!</p>
            <LinkedinBox>
              <img src={linkedin2} alt="" width="48px" height="auto"/>
              <h6>Linkedin</h6>
              <p>Patrick Waldera</p>
              <a href="https://www.linkedin.com/in/patrickwaldera/" target='_blank'>Acessar</a>
            </LinkedinBox>
          </LinkedinContainer>
          <FormWrapper>
            <p className='title'>Escreva sua mensagem</p>
            <FormContainer data-aos="fade-up">
              <form onSubmit={handleSubmit(sendEmail)}>
                <div className="form-control">
                  <label>Nome:</label>
                  <input
                    type="text"
                    name="name"
                    placeholder='Insira seu nome aqui'
                    {...register("name", {
                      required: true
                    })}
                  />
                  {errors.name && errors.name.type === "required" && (
                    <p className="errorMsg">Você precisa inserir seu nome.</p>
                  )}
                </div>
                <div className="form-control">
                  <label>Email:</label>
                  <input
                    type="text"
                    name="email"
                    placeholder='Insira seu e-mail aqui'
                    {...register("email", {
                      required: true,
                      pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                    })}
                  />
                  {errors.email && errors.email.type === "required" && (
                    <p className="errorMsg">Você precisa inserir seu E-mail.</p>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <p className="errorMsg">E-mail não é válido.</p>
                  )}
                </div>
                <div className="form-control">
                  <label>Mensagem:</label>
                  <textarea
                    className='mensage'
                    type="text"
                    name="mensage"
                    placeholder='Escreva sua mensagem'
                    {...register("mensage", {
                      required: true
                    })}
                  />
                  {errors.mensage && errors.mensage.type === "required" && (
                    <p className="errorMsg">Você precisa escrever uma mensagem.</p>
                  )}
                </div>
                <div className="form-control">
                    <label></label>
                {loading? 
                  <CgSpinnerTwoAlt size={36} className='loading'/>
                : 
                  <button type="submit">
                    <IconButton
                          image={send} 
                          backgroundColor='linear-gradient(180deg, #E4FFE9 0%, #A7FFB6 100%)'
                          title='Enviar mensagem'
                      > </IconButton>
                  </button>
                }
                </div> 
              </form>
              {mensagem? 
              <p className='formResposta'>{mensagem}</p> : null}
            </FormContainer>
          </FormWrapper>
        </Wraper>
    </ContactContainer>
  )
}

export { Contact }
