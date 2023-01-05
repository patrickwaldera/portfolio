import { Card } from '../Card'
import { ProjectsContainer, ProjectsTitle, Carrousel} from './styles'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
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
        <ProjectsTitle>
          <h3>Projetos</h3>
          <p>Trabalhos recentes</p>
        </ProjectsTitle>

        <Carrousel>
          <Slider {...settings}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Slider>
        </Carrousel>
    </ProjectsContainer>
  )
}

export { Projects }
