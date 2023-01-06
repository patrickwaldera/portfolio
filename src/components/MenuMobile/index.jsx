import { Container, NavMenu } from './styles'
import { IoClose } from "react-icons/io5"
import { useEffect } from 'react'

const MenuMobile = ( {menuIsVisible, setMenuIsVisible} ) => {

  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible])
  return (
    <Container isVisible={menuIsVisible}>
        <IoClose size={36} onClick={() => setMenuIsVisible(false)}/>
        <NavMenu className='nav'>
        <a href="#inicio" onClick={() => setMenuIsVisible(false)}>Início</a>
        <a href="#habilidades"  onClick={() => setMenuIsVisible(false)}>Habilidades</a>
        <a href="#projetos"  onClick={() => setMenuIsVisible(false)}>Projetos</a>
        <a href="#qualificacoes"  onClick={() => setMenuIsVisible(false)}>Qualificações</a>
        <a href="#contato"  onClick={() => setMenuIsVisible(false)}>Contato</a>
      </NavMenu>
    </Container>
  )
}

export { MenuMobile }