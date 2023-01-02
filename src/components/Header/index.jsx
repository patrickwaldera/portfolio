import { NavContainer, NavLogo, NavMenu } from './styles'
import { HiMenu } from 'react-icons/hi'

const Header = () => {
  const name = '< Waldera />';  
  return (
    <NavContainer>
      <NavLogo href='#'>{name}</NavLogo>
      <NavMenu className='nav'>
        <a href="">Início</a>
        <a href="">Habilidades</a>
        <a href="">Projetos</a>
        <a href="">Qualificações</a>
        <a href="">Contato</a>
      </NavMenu>
      <HiMenu className='mobile' color='white' size={24}/>
    </NavContainer>
  )
}

export { Header }
