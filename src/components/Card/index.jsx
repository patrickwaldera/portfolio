import {
    CardContainer,
    CardImage,
    CardInfo,
    CardText,
    CardTittle,
    CardButtons
} from './styles'
import { IconButton } from '../IconButton'
import github from '../../assets/projects/github.png'

const Card = ({image, title, description, linkCode, linkDemo}) => {
  const handleClick = () => {
    window.open(`${linkDemo}`, '_blank');
  }
  return (
    <CardContainer>
        <CardImage onClick={handleClick}>
            <img src={image} alt={title} width="340" height="306" loading='lazy' />
        </CardImage>
        <CardInfo>
            <CardTittle>{title}</CardTittle>
            <CardText>
                {description}
            </CardText>
            <CardButtons>
                <IconButton 
                    link={linkCode}
                    target= '_blank'
                    image= {github}
                    altText="Github"
                    backgroundColor= 'linear-gradient(180deg, #E4FFE9 0%, #A7FFB6 100%)'>
                </IconButton>
                
                {linkDemo.length > 0 &&
                <IconButton 
                    link={linkDemo}
                    target= '_blank'
                    backgroundColor='linear-gradient(180deg, #E4FFE9 0%, #A7FFB6 100%)'
                    title='Demo'
                >
                </IconButton>}
            </CardButtons>
        </CardInfo>
    </CardContainer>
  )
}

export { Card }