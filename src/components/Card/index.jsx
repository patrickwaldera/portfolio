import {
    CardContainer,
    CardImage,
    CardInfo,
    CardText,
    CardTittle,
    CardButtons
} from './styles'
import { IconButton } from '../IconButton'
import github from '../../assets/projects/github.svg'
import cs50w from '../../assets/projects/cs50w.jpg'

const Card = () => {
  return (
    <CardContainer>
        <CardImage>
            <img src={cs50w} alt="" />
        </CardImage>
        <CardInfo>
            <CardTittle>MyPasswords</CardTittle>
            <CardText>
                Aplicação desenvolvida para o curso CS50W de harvard. Aplicação desenvolvida para o curso CS50W de harvard. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aspernatur atque asperiores obcaecati id, ipsum dolores voluptatibus quos, esse ab necessitatibus eum consequatur iure perspiciatis sequi vero impedit nemo veritatis?
            </CardText>
            <CardButtons>
                <IconButton 
                    link="https://github.com/patrickwaldera"
                    target={'_blank'}
                    image={github}
                    backgroundColor='linear-gradient(180deg, #E4FFE9 0%, #A7FFB6 100%)'>
                </IconButton>
                <IconButton 
                        backgroundColor='linear-gradient(180deg, #E4FFE9 0%, #A7FFB6 100%)'
                        title='Demo'
                >
                </IconButton>
            </CardButtons>
        </CardInfo>
    </CardContainer>
  )
}

export { Card }