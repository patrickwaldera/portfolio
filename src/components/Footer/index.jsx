import { 
  FooterContainer,
  FootertTitle,
  FooterNav,
  ButtonsContainer
} from './styles'

import { IconButton } from '../IconButton'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'

const Footer = () => {

  return (
    <FooterContainer>
        <FootertTitle>
          <h6>Patrick Waldera</h6>
        </FootertTitle>
        <FooterNav>
          <a href="#inicio">Início</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#projetos">Projetos</a>
          <a href="#qualificacoes">Qualificações</a>
          <a href="#contato">Contato</a>
        </FooterNav>
        <ButtonsContainer>
          <IconButton link="https://github.com/patrickwaldera" target={'_blank'} image={github}> </IconButton>
          <IconButton link="https://www.linkedin.com/in/patrickwaldera/" target={'_blank'} image={linkedin}> </IconButton>
       </ButtonsContainer> 
       <p>© 2023</p>  
    </FooterContainer>
  )
}

export { Footer }
