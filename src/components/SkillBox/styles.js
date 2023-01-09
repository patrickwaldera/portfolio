import styled from "styled-components";

export const SkillBoxContainer = styled.div`
    background: #FFFFFF;
    border-radius: 25px;
    width: 340px;
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 24px;
    flex-wrap: wrap;
`
export const SkillBoxList = styled.div`
    margin: 0 auto;
    ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        max-width: 190px;
        flex-wrap: wrap;
        gap: 18px;
    }

    li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 50px;
    }
`

export const SkillBoxName = styled.div`
    color: #051F20;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.313rem;
    margin: 16px 0px 18px 0px;
`

export const SkillImg = styled.img`
    max-width: 36px;
    max-height: 36px;
    margin-bottom: 5px;
`

export const SkillName = styled.p`
    color: #051F20;
    text-align: center;
    font-weight: 500;
    font-size: 0.688rem;
    line-height: 0.75rem;
`