import { Card } from '../Card'
import { ProjectsContainer, ProjectsTitle, Carrousel} from './styles'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import cs50w from '../../assets/projects/cs50w.jpg'
import pokedex from '../../assets/projects/pokedex.jpg'
import calculadora from '../../assets/projects/calculadora.jpg'

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: cs50w,
      title: 'MyPasswords',
      description: 'Meu projeto final para o curso CS50w. Um gerenciador de senhas construído usando Django e ReactJS.',
      linkCode: 'https://github.com/patrickwaldera/cs50w',
      linkDemo: 'https://www.youtube.com/watch?v=322oe2GNMtQ&ab_channel=PatrickWaldera'
    },
    {
      id: 2,
      image: pokedex,
      title: 'Pokedex',
      description: 'Pokedex criada durante o Bootcamp Orange Tech+ promovido pela DIO junto ao banco Inter.',
      linkCode: 'https://github.com/patrickwaldera/OrangeTech-DIO/tree/main/pokedex',
      linkDemo: ''
    },
    {
      id: 3,
      image: calculadora,
      title: 'Calculadora',
      description: 'Calculadora criada usando ReactJS durante o Bootcamp Orange Tech+',
      linkCode: 'https://github.com/patrickwaldera/OrangeTech-DIO/tree/main/react/desafio01-calculadora',
      linkDemo: ''
    }
  ]
  const settings = {
    dots: true,
      infinite: false,
      
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true, 
          }
        },
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0
          }
        }
      ]
  };
  return (
    <ProjectsContainer>
        <ProjectsTitle id='projetos'>
          <h3>Projetos</h3>
          <p>Trabalhos recentes</p>
        </ProjectsTitle>

        <Carrousel>
          <Slider {...settings}>
            {projects.map((project) => 
              <Card key={project.id} image={project.image} title={project.title} description={project.description} linkCode={project.linkCode} linkDemo={project.linkDemo}/>
            )}
          </Slider>
        </Carrousel>
    </ProjectsContainer>
  )
}

export { Projects }
