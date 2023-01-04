import { Card } from '../Card'
import { ProjectsContainer, ProjectsTitle} from './styles'

const Projects = () => {

  return (
    <ProjectsContainer>
        <ProjectsTitle>
          <h3>Projetos</h3>
          <p>Trabalhos recentes</p>
        </ProjectsTitle>
        <Card />
    </ProjectsContainer>
  )
}

export { Projects }
