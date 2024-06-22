//Front-end
import css from '../assets/skillsicons/frontend/css.png'
import html from '../assets/skillsicons/frontend/html5.png'
import JS from '../assets/skillsicons/frontend/js.png'
import next from '../assets/skillsicons/frontend/next.png'
import reactJS from '../assets/skillsicons/frontend/react.png'
import svelte from '../assets/skillsicons/frontend/svelte.png'

//Back-end
import golang from '../assets/skillsicons/backend/golang.png'
import java from '../assets/skillsicons/backend/java.png'
import mongodb from '../assets/skillsicons/backend/mongodb.png'
import mysql from '../assets/skillsicons/backend/mysql.png'
import nodejs from '../assets/skillsicons/backend/nodejs.png'
import typescript from '../assets/skillsicons/backend/typescript.png'

//Tools
import docker from '../assets/skillsicons/tools/docker.png'
import figma from '../assets/skillsicons/tools/figma.png'
import git from '../assets/skillsicons/tools/git.png'
import photoshop from '../assets/skillsicons/tools/photoshop.png'
import vscode from '../assets/skillsicons/tools/vscode.png'

//Projects
import cs50w from '../assets/projects/cs50w.jpg'
import githubusers from '../assets/projects/githubusers.jpg'
import nutrikids from '../assets/projects/nutrikids.jpg'
import techspace from '../assets/projects/techspace.jpg'
import weather from '../assets/projects/weatherApp.jpg'

export const skillsFront = [
  {id: 1, image: html, name: 'HTML'},
  {id: 2, image: css, name: 'CSS'},
  {id: 3, image: JS, name: 'JavaScript'},
  {id: 4, image: reactJS, name: 'ReactJS'},
  {id: 5, image: next, name: 'Next'},
  {id: 6, image: svelte, name: 'Svelte'}
];
export const skillsBack = [
  {id: 1, image: nodejs, name: 'NodeJS'},
  {id: 2, image: typescript, name: 'TypeScript'},
  {id: 3, image: golang, name: 'Golang'},
  {id: 4, image: java, name: 'Java'},
  {id: 5, image: mysql, name: 'MySQL'},
  {id: 6, image: mongodb, name: 'MongoDB'},
];
export const skillsTools = [
  {id: 1, image: git, name: 'Git'},
  {id: 2, image: docker, name: 'Docker'},
  {id: 3, image: vscode, name: 'VS Code'},
  {id: 4, image: figma, name: 'Figma'},
  {id: 5, image: photoshop, name: 'Photoshop'},

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
    linkDemo: 'https://weather.patrickwaldera.com'
  },
  {
    id: 3,
    image: techspace,
    title: 'Tech Space',
    description: 'Front-end de um e-commerce, criado com o framework NextJS, tendo como objetivo praticar conhecimentos em ReactJS, Styled Components, React Hooks e outras tecnologias.',
    linkCode: 'https://github.com/patrickwaldera/tech-space',
    linkDemo: 'https://techspace.patrickwaldera.com'
  },
  {
    id: 4,
    image: githubusers,
    title: 'GitHub Users',
    description: 'Este projeto fez parte de um desafio front-end, uma SPA que consome a API pública do GitHub.',
    linkCode: 'https://github.com/patrickwaldera/github-users',
    linkDemo: 'https://githubusers.patrickwaldera.com'
  },
  {
    id: 5,
    image: nutrikids,
    title: 'NutriKids',
    description: 'Aplicação destinada a facilitar o acompanhamento nutricional de crianças do ensino infantil. Tecnologias utilizadas: TypeScript, Svelte, Pocketbase.',
    linkCode: 'https://github.com/patrickwaldera/nutrikids',
    linkDemo: 'https://nutrikids.patrickwaldera.com'
  }
]