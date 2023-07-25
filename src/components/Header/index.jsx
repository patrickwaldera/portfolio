import { NavContainer, NavLogo, NavMenu } from './styles'
import { HiMenu } from 'react-icons/hi'
import { Link } from "react-scroll";

const Header = ({setMenuIsVisible}) => {
  const name = '< Waldera />';  
  return (
    <NavContainer id='inicio'>
      <NavLogo href='#inicio'>{name}</NavLogo>
      <NavMenu className='nav'>    
        <Link className='nav-links' to="inicio" smooth={true} offset={-70} duration={1000}>
          Início
        </Link>
        <Link className='nav-links' to="habilidades" smooth={true} offset={-70} duration={1000}>
          Habilidades
        </Link>
        <Link className='nav-links' to="projetos" smooth={true} offset={-70} duration={1000}>
          Projetos
        </Link>
        <Link className='nav-links' to="qualificacoes" smooth={true} offset={-70} duration={1000}>
          Qualificações
        </Link>
        <Link className='nav-links' to="contato" smooth={true} offset={-70} duration={1000}>
          Contato
        </Link>
      </NavMenu>
      <HiMenu className='mobile' color='white' size={24} onClick={() => setMenuIsVisible(true)}/>
    </NavContainer>
  )
}

export { Header }
