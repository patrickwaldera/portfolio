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
              <SkillImg src={skill.image} width="36px" height="auto" max-width="36px" max-height="36px" alt={skill.name} />
              <SkillName>{skill.name}</SkillName>
            </li>
          ))}
        </ul>
      </SkillBoxList>
    </SkillBoxContainer>
  )
}

export { SkillBox }