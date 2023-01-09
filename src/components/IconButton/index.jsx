import { ButtonBox } from './styles'

const IconButton = ({link, target, image, title = null, backgroundColor = '#163832'}) => {
  return (
    <ButtonBox href={link} target={target} backgroundColor={backgroundColor} title={title}> 
        {image? 
            <img src={image} alt="" width="24px" height="auto"/>
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
