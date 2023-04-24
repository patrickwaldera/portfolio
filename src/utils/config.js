//Front-end
import html from '../assets/skillsicons/Front/html5.png'
import css from '../assets/skillsicons/Front/css.png'
import JS from '../assets/skillsicons/Front/js.png'
import reactJS from '../assets/skillsicons/Front/React.svg'
import next from '../assets/skillsicons/Front/next.png'
import styledcomponents from '../assets/skillsicons/Front/styled-components.png'

//Back-end
import python from '../assets/skillsicons/Back/python.png'
import django from '../assets/skillsicons/Back/django.png'
import mysql from '../assets/skillsicons/Back/mysql.png'
import mongodb from '../assets/skillsicons/Back/mongodb.png'
import nodejs from '../assets/skillsicons/Back/nodejs.png'

//Tools
import git from '../assets/skillsicons/Ferramentas/git.png'
import figma from '../assets/skillsicons/Ferramentas/figma.png'
import photoshop from '../assets/skillsicons/Ferramentas/photoshop.png'
import vscode from '../assets/skillsicons/Ferramentas/vscode.png'

//Projects
import cs50w from '../assets/projects/cs50w.jpg'
import weather from '../assets/projects/weatherApp.jpg'
import techspace from '../assets/projects/techspace.jpg'

export const skillsFront = [
  {id: 1, image: html, name: 'HTML'},
  {id: 2, image: css, name: 'CSS'},
  {id: 3, image: JS, name: 'JavaScript'},
  {id: 4, image: reactJS, name: 'ReactJS'},
  {id: 5, image: next, name: 'Next'},
  {id: 6, image: styledcomponents, name: 'Styled Components'}
];
export const skillsBack = [
  {id: 1, image: python, name: 'Python'},
  {id: 2, image: django, name: 'Django'},
  {id: 3, image: mysql, name: 'MySQL'},
  {id: 4, image: nodejs, name: 'NodeJS'},
  {id: 5, image: mongodb, name: 'MongoDB'}

];
export const skillsTools = [
  {id: 1, image: git, name: 'Git'},
  {id: 2, image: figma, name: 'Figma'},
  {id: 3, image: photoshop, name: 'Photoshop'},
  {id: 4, image: vscode, name: 'VS Code'}
];

export const projects = [
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
    image: weather,
    title: 'Weather',
    description: 'Aplicação consumindo uma API pública que mostra a temperatura atual de determinada cidade',
    linkCode: 'https://github.com/patrickwaldera/weather',
    linkDemo: 'https://weather-pw.vercel.app/'
  },
  {
    id: 3,
    image: techspace,
    title: 'Tech Space',
    description: 'Front-end de um e-commerce, criado com o framework NextJS, tendo como objetivo praticar conhecimentos em ReactJS, Styled Components, React Hooks e outras tecnologias.',
    linkCode: 'https://github.com/patrickwaldera/tech-space',
    linkDemo: 'https://techspace-pw.vercel.app/'
  }
]