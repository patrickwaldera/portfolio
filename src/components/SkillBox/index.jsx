import { SkillBoxContainer, SkillBoxName, SkillImg, SkillName, SkillBoxList } from "./styles"

const SkillBox = ({name, skills = []}) => {
  return (
    <SkillBoxContainer>
      <SkillBoxName>
        {name}
      </SkillBoxName>
      <SkillBoxList>
          {skills.map((skill) => (
            <li key={skill.id}>
              <SkillImg src={skill.image} />
              <SkillName>{skill.name}</SkillName>
            </li>
          ))}
      </SkillBoxList>
    </SkillBoxContainer>
  )
}

export { SkillBox }