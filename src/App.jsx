import { 
  ContainerHeader,
  Wave,
  ContainerProjects,
  ContainerMiddle,
  ContainerFooter
} from "./styles";

import { Header } from './components/Header';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Qualifications } from './components/Qualifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MenuMobile } from './components/MenuMobile'
import { useState, useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])
  
  return (
    <>
    <MenuMobile 
      menuIsVisible={menuIsVisible}
      setMenuIsVisible={setMenuIsVisible}
    />
    <ContainerHeader>
      <Header setMenuIsVisible={setMenuIsVisible} />
      <About />
      <Skills />
    </ContainerHeader>
    <Wave>
        <svg viewBox="0 0 1440 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 160L48 144C96 128 192 96 288 85.3C384 75 480 85 576 101.3C672 117 768 139 864 149.3C960 160 1056 160 1152 154.7C1248 149 1344 139 1392 133.3L1440 128V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V160Z" fill="#051F20"/>
        </svg>
    </Wave>
    <ContainerProjects>
      <Projects />
    </ContainerProjects>
    <Wave>
      <svg style={{top: '5px'}} viewBox="0 0 1440 136" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 40L48 29.3C96 19 192 -3 288 13.3C384 29 480 83 576 88C672 93 768 51 864 45.3C960 40 1056 72 1152 93.3C1248 115 1344 125 1392 130.7L1440 136H1392C1344 136 1248 136 1152 136C1056 136 960 136 864 136C768 136 672 136 576 136C480 136 384 136 288 136C192 136 96 136 48 136H0V40Z" fill="#051F20"/>
      </svg>
    </Wave>
    <ContainerMiddle>
      <Qualifications />
      <Contact />
    </ContainerMiddle>
    <ContainerFooter>
      <Footer />
    </ContainerFooter>
    </>
  )
}

export { App }
