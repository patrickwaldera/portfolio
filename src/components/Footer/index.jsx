import {
  FooterContainer,
  FootertTitle,
  FooterNav,
  ButtonsContainer
} from './styles';

import { IconButton } from '../IconButton';
import { Link } from "react-scroll";
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterContainer>
      <FootertTitle>
        <h6>Patrick Waldera</h6>
      </FootertTitle>
      <FooterNav>
        <Link className='nav-links' to="inicio" smooth={true} offset={-70} duration={500}>
          Início
        </Link>
        <Link className='nav-links' to="habilidades" smooth={true} offset={-70} duration={500}>
          Habilidades
        </Link>
        <Link className='nav-links' to="projetos" smooth={true} offset={-70} duration={500}>
          Projetos
        </Link>
        <Link className='nav-links' to="qualificacoes" smooth={true} offset={-70} duration={500}>
          Qualificações
        </Link>
        <Link className='nav-links' to="contato" smooth={true} offset={-70} duration={500}>
          Contato
        </Link>
      </FooterNav>
      <ButtonsContainer>
        <IconButton link="https://github.com/patrickwaldera" target={'_blank'} image={github} altText='Github'> </IconButton>
        <IconButton link="https://www.linkedin.com/in/patrickwaldera/" target={'_blank'} image={linkedin} altText='Linkedin'> </IconButton>
      </ButtonsContainer>
      <p>© {year}</p>
    </FooterContainer>
  );
};

export { Footer };
