import { SkillBox } from '../SkillBox'
import { SkillsContainer, SkillTitle, SkillBoxList } from './styles'
import { skillsFront, skillsBack, skillsTools } from '../../utils/config'

const Skills = () => {  
  return (
    <SkillsContainer data-aos="fade-in">
        <SkillTitle id='habilidades'>
          <h3>Habilidades</h3>
          <p>Nível técnico</p>
        </SkillTitle>
        <SkillBoxList>
          <SkillBox name='Front-end' skills={skillsFront}/>
          <SkillBox name='Back-end' skills={skillsBack}/>
          <SkillBox name='Ferramentas' skills={skillsTools}/>
        </SkillBoxList>
    </SkillsContainer>
  )
}

export { Skills }
