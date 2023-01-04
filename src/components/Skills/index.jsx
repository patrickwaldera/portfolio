import { SkillBox } from '../SkillBox'
import { SkillsContainer, SkillTitle, SkillBoxList } from './styles'

//Front-end
import html from '../../assets/skillsicons/Front/html5.png'
import css from '../../assets/skillsicons/Front/css.png'
import JS from '../../assets/skillsicons/Front/js.png'
import reactJS from '../../assets/skillsicons/Front/React.svg'
import next from '../../assets/skillsicons/Front/next.png'

//Back-end
import python from '../../assets/skillsicons/Back/python.png'
import django from '../../assets/skillsicons/Back/django.png'

//Tools
import git from '../../assets/skillsicons/Ferramentas/git.png'
import figma from '../../assets/skillsicons/Ferramentas/figma.png'
import photoshop from '../../assets/skillsicons/Ferramentas/photoshop.png'

const Skills = () => {
  const skillsfront = [
    {id: 1, image: html, name: 'HTML'},
    {id: 2, image: css, name: 'CSS'},
    {id: 3, image: JS, name: 'JavaScript'},
    {id: 4, image: reactJS, name: 'ReactJS'},
    {id: 5, image: next, name: 'Next'}
  ];
  const skillsback = [
    {id: 1, image: python, name: 'Python'},
    {id: 2, image: django, name: 'Django'}
  ];
  const skillstools = [
    {id: 1, image: git, name: 'Git'},
    {id: 2, image: figma, name: 'Figma'},
    {id: 3, image: photoshop, name: 'Photoshop'}
  ];
  return (
    <SkillsContainer>
        <SkillTitle id='skills'>
          <h3>Habilidades</h3>
          <p>Nível técnico</p>
        </SkillTitle>
        <SkillBoxList>
          <SkillBox name='Front-end' skills={skillsfront}/>
          <SkillBox name='Back-end' skills={skillsback}/>
          <SkillBox name='Ferramentas' skills={skillstools}/>
        </SkillBoxList>
    </SkillsContainer>
  )
}

export { Skills }