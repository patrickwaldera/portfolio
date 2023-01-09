import { SkillBoxContainer, SkillBoxName, SkillImg, SkillName, SkillBoxList } from "./styles"

const SkillBox = ({name, skills = []}) => {
  return (
    <SkillBoxContainer>
      <SkillBoxName>
        {name}
      </SkillBoxName>
      <SkillBoxList>
        <ul>
          {skills.map((skill) => (
            <li key={skill.id}>
              <SkillImg src={skill.image} max-width="36px" max-height="36px" />
              <SkillName>{skill.name}</SkillName>
            </li>
          ))}
        </ul>
      </SkillBoxList>
    </SkillBoxContainer>
  )
}

export { SkillBox }