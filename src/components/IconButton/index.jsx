import { ButtonBox } from './styles'

const IconButton = ({image, title = null, backgroundColor = '#163832'}) => {
  return (
    <ButtonBox backgroundColor={backgroundColor} title={title}> 
        {image? 
            <img src={image} alt="" />
        : 
            null
        }
        {title?
            <p>{title}</p>        
        :
            null
        }
    </ButtonBox>
  )
}

export { IconButton }
