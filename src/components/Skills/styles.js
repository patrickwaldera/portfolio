import styled from "styled-components";

export const SkillsContainer = styled.section`
    max-width: 1148px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding-bottom: 44px;
`

export const SkillBoxList = styled.div`

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 64px;

    @media(max-width: 900px) {
        gap: 32px;
    }
`

export const SkillTitle = styled.header`
    color: #ffffff;
    text-align: center;
    margin-bottom: 2.25rem;

    h3 {
        font-weight: 500;
        font-size: 2.25rem;
        margin-bottom: 8px;
    }

    p {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.188rem;
        opacity: 0.4;
    }

`