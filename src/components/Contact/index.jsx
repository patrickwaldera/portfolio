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

const Contact = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ContactContainer>
        <ContactTitle>
          <h3>Contato</h3>
          <p>Entre em contato!</p>
        </ContactTitle>
        <Wraper>
          <LinkedinContainer>
            <p>Vamos nos conectar!</p>
            <LinkedinBox>
              <img src="src/assets/linkedin2.png" alt="" />
              <h6>Linkedin</h6>
              <p>Patrick Waldera</p>
              <a href="https://www.linkedin.com/in/patrickwaldera/" target='_blank'>Acessar</a>
            </LinkedinBox>
          </LinkedinContainer>
          <FormWrapper>
            <p className='title'>Escreva sua mensagem</p>
            <FormContainer>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label>Nome:</label>
                  <input
                    type="text"
                    name="name"
                    placeholder='Insira seu nome aqui'
                  />
                  {errors.email && errors.email.type === "required" && (
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
                  <input
                    type="text"
                    name="mensage"
                    placeholder='Escreva sua mensagem'
                  />
                  {errors.email && errors.email.type === "required" && (
                    <p className="errorMsg">Você precisa inserir sua mensagem.</p>
                  )}
                </div>
                <div className="form-control">
                  <label></label>
                  <button type="submit">
                    <IconButton 
                          image={send} 
                          backgroundColor='linear-gradient(180deg, #E4FFE9 0%, #A7FFB6 100%)'
                          title='Enviar mensagem'
                      > </IconButton>
                  </button>
                </div>
              </form>
            </FormContainer>
          </FormWrapper>
        </Wraper>
    </ContactContainer>
  )
}

export { Contact }
