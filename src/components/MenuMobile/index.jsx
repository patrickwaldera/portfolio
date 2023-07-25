import { Container, NavMenu } from './styles'
import { IoClose } from "react-icons/io5"
import { useEffect } from 'react'
import { Link } from "react-scroll";

const MenuMobile = ( {menuIsVisible, setMenuIsVisible} ) => {

  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible])
  return (
    <Container isVisible={menuIsVisible}>
        <IoClose size={36} onClick={() => setMenuIsVisible(false)}/>
        <NavMenu className='nav'>
          <Link className='nav-links' to="inicio" smooth={true} offset={-70} duration={500} onClick={() => setMenuIsVisible(false)}>
            Início
          </Link>
          <Link className='nav-links' to="habilidades" smooth={true} offset={-70} duration={500} onClick={() => setMenuIsVisible(false)}>
            Habilidades
          </Link>
          <Link className='nav-links' to="projetos" smooth={true} offset={-70} duration={500} onClick={() => setMenuIsVisible(false)}>
            Projetos
          </Link>
          <Link className='nav-links' to="qualificacoes" smooth={true} offset={-70} duration={500} onClick={() => setMenuIsVisible(false)}>
            Qualificações
          </Link>
          <Link className='nav-links' to="contato" smooth={true} offset={-70} duration={500} onClick={() => setMenuIsVisible(false)}>
            Contato
          </Link>
      </NavMenu>
    </Container>
  )
}

export { MenuMobile }