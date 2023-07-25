import { ButtonBox } from './styles'

const IconButton = ({link, target, image, title = null, backgroundColor = '#163832', altText}) => {
  return (
    <ButtonBox href={link} target={target} backgroundColor={backgroundColor} title={title}> 
        {image? 
            <img src={image} alt={altText} width="24px" height="auto" min-height="20px" />
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
