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
              <Event interval={"2023 até o momento"} title={"Bacharel em Engenharia de Software"} subtitle={"Universidade Positivo"} />
              <Event interval={"2022-2023"} title={"Pós-graduação em Desenvolvimento em Aplicações Web"} subtitle={"UniBF"} />
              <Event interval={"2020 – 2022"} title={"Tecnólogo em Análise e Desenvolvimento de Sistemas"} subtitle={"Faculdades Integradas Camões"} />
            </Timeline>
          </ExpContainer>
          <ExpContainer data-aos="fade-down">
          <p>Experiência profissional</p>
          <Timeline>
              <Event interval={"2017 - 2023"} title={"Exército Brasileiro"} subtitle={"Durante seis anos, servi ao Exército Brasileiro desempenhando a função de Auxiliar da Seção de Comunicação Social cuja missão principal era manter e promover a imagem da instituição, e assumi também, uma função de grande responsabilidade como Auxiliar da Reserva de Armamento."} />
          </Timeline>
          </ExpContainer>
        </TimelineContainer>

    </QualificationsContainer>
  )
}

export { Qualifications }
