import { 
    AboutContainer,
    Info,
    InfoDiv,
    AboutImg,
    ButtonsContainer
} from "./styles"
import { IconButton } from '../IconButton'
import patrickwaldera from '../../assets/patrickwaldera.jpg'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import send from '../../assets/send.png'

const About = () => {
  return (
    <AboutContainer>
        <Info data-aos="fade-in">
            <div className="info-txt">
                <h1>Patrick Waldera</h1>
                <InfoDiv>
                    <h3>Desenvolvedor</h3>
                    <p>Sou Desenvolvedor Full Stack Júnior, buscando crescimento profissional e experiências para aperfeiçoar minhas habilidades. Estou motivado a superar desafios e contribuir com soluções inovadoras.</p>
                </InfoDiv>
                <ButtonsContainer>
                    <IconButton link="https://github.com/patrickwaldera" target={'_blank'} image={github} altText='Github'> </IconButton>
                    <IconButton link="https://www.linkedin.com/in/patrickwaldera/" target={'_blank'} image={linkedin} altText='Linkedin'> </IconButton>
                    <IconButton 
                        image={send}
                        link="#contato"
                        backgroundColor='linear-gradient(180deg, #E4FFE9 0%, #A7FFB6 100%)'
                        title="Contato"
                        altText="Entrar em contato"
                    > </IconButton>
                </ButtonsContainer>   
            </div>
            <div className="image">
                <AboutImg src={patrickwaldera} alt="" width="455px" height="auto" />
            </div>
        </Info>
    </AboutContainer>
  )
}

export { About }
