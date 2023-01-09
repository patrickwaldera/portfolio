import { SkillBox } from '../SkillBox'
import { SkillsContainer, SkillTitle, SkillBoxList } from './styles'

//Front-end
import html from '../../assets/skillsicons/Front/html5.png'
import css from '../../assets/skillsicons/Front/css.png'
import JS from '../../assets/skillsicons/Front/js.png'
import reactJS from '../../assets/skillsicons/Front/React.svg'
import next from '../../assets/skillsicons/Front/next.png'
import styledcomponents from '../../assets/skillsicons/Front/styled-components.png'

//Back-end
import python from '../../assets/skillsicons/Back/python.png'
import django from '../../assets/skillsicons/Back/django.png'
import mysql from '../../assets/skillsicons/Back/mysql.png'

//Tools
import git from '../../assets/skillsicons/Ferramentas/git.png'
import figma from '../../assets/skillsicons/Ferramentas/figma.png'
import photoshop from '../../assets/skillsicons/Ferramentas/photoshop.png'

const Skills = () => {
  const skillsFront = [
    {id: 1, image: html, name: 'HTML'},
    {id: 2, image: css, name: 'CSS'},
    {id: 3, image: JS, name: 'JavaScript'},
    {id: 4, image: reactJS, name: 'ReactJS'},
    {id: 5, image: next, name: 'Next'},
    {id: 6, image: styledcomponents, name: 'Styled Components'}
  ];
  const skillsBack = [
    {id: 1, image: python, name: 'Python'},
    {id: 2, image: django, name: 'Django'},
    {id: 3, image: mysql, name: 'MySQL'}

  ];
  const skillsTools = [
    {id: 1, image: git, name: 'Git'},
    {id: 2, image: figma, name: 'Figma'},
    {id: 3, image: photoshop, name: 'Photoshop'}
  ];
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
