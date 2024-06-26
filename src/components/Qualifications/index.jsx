import { Event, Timeline } from "react-timeline-scribble";
import {
  ExpContainer,
  QualificationsContainer,
  QualificationsTitle,
  TimelineContainer
} from './styles';

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
              <Event interval={"Ago 2023 - Até o momento"} title={"Bacharel em Engenharia de Software"} subtitle={"Universidade Positivo"} />
              <Event interval={"Ago 2022 - Jan 2023"} title={"Pós-graduação em Desenvolvimento em Aplicações Web"} subtitle={"UniBF"} />
              <Event interval={"Fev 2020 – Jul 2022"} title={"Tecnólogo em Análise e Desenvolvimento de Sistemas"} subtitle={"Faculdades Integradas Camões"} />
            </Timeline>
          </ExpContainer>
          <ExpContainer data-aos="fade-down">
          <p>Experiência profissional</p>
          <Timeline>
              <Event interval={"Jan 2024 - Até o momento"} title={"Axon Technology - Desenvolvedor de Software"} />
              <Event interval={"Out 2023 - Nov 2023"} title={"Teledata - Analista de Sistemas"} />
              <Event interval={"Ago 2017 - Jul 2023"} title={"Exército Brasileiro - Cabo"} subtitle={"Durante seis anos, servi ao Exército Brasileiro desempenhando a função de Auxiliar da Seção de Comunicação Social cuja missão principal era manter e promover a imagem da instituição. Além de desempenhar a função de auxiliar da reserva de armamento, sendo responsável pelo controle e manutenção dos armamentos."} />
          </Timeline>
          </ExpContainer>
        </TimelineContainer>

    </QualificationsContainer>
  )
}

export { Qualifications };

