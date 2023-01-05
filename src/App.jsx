import { Header } from './components/Header';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ContainerHeader, Wave, ContainerProjects } from "./styles";

function App() {

  return (
    <>
    <ContainerHeader>
      <Header />
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
    </>
  )
}

export { App }
