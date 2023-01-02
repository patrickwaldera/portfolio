import styled, { css } from "styled-components";

export const ButtonBox = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    background: ${({backgroundColor}) => backgroundColor};
    border-radius: 5px;
    padding: 8px;

    img {
        max-width: 1.5rem;
        max-height: 1.5rem;
        object-fit: contain;
    }

    p {
        font-weight: 500;
        font-size: 1.125rem;
        line-height: 1.313rem;
        margin-left: 0.375rem;
        color: #051F20;
    }

    ${({title}) => title !== null && css `
        height: 40px;
    `}

`