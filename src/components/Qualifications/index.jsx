import { 
  QualificationsContainer,
  QualificationsTitle,
  TimelineContainer,
  ExpContainer
} from './styles'
import { Timeline, Event } from "react-timeline-scribble";

const Qualifications = () => {
  
  return (
    <QualificationsContainer>
        <QualificationsTitle id='qualificacoes'>
          <h3>Qualificações</h3>
          <p>Formação e experiência profissional</p>
        </QualificationsTitle>
        <TimelineContainer>
          <ExpContainer data-aos="fade-down">
            <p>Formação</p>
            <Timeline>
              <Event interval={"2020 – 2022"} title={"Tecnólogo em Análise e Desenvolvimento de Sistemas"} subtitle={"Faculdades Integradas Camões"} />
              <Event interval={"2022-2023"} title={"Certificado Profissional de UX Design"} subtitle={"Google"} />
              <Event interval={"2022-2023"} title={"Pós-graduação em Gestão da Qualidade de Software"} subtitle={"UniBF"} />
              <Event interval={"2022-2023"} title={"Pós-graduação em Desenvolvimento em Aplicações Web"} subtitle={"UniBF"} />
            </Timeline>
          </ExpContainer>
          <ExpContainer data-aos="fade-down">
          <p>Experiência profissional</p>
          <Timeline>
              <Event interval={"2017 - Atual"} title={"Exército Brasileiro"} subtitle={"Cabo no Exército Brasileiro exercendo a função de auxiliar da Seção de Comunicação Social em um Batalhão de Suprimento."} />
          </Timeline>
          </ExpContainer>
        </TimelineContainer>

    </QualificationsContainer>
  )
}

export { Qualifications }
