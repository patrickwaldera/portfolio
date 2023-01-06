import { NavContainer, NavLogo, NavMenu } from './styles'
import { HiMenu } from 'react-icons/hi'

const Header = ({setMenuIsVisible}) => {
  const name = '< Waldera />';  
  return (
    <NavContainer id='inicio'>
      <NavLogo href='#inicio'>{name}</NavLogo>
      <NavMenu className='nav'>
        <a href="#inicio">Início</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#projetos">Projetos</a>
        <a href="#qualificacoes">Qualificações</a>
        <a href="#contato">Contato</a>
      </NavMenu>
      <HiMenu className='mobile' color='white' size={24} onClick={() => setMenuIsVisible(true)}/>
    </NavContainer>
  )
}

export { Header }
