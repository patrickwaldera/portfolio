import styled from "styled-components";

export const FooterContainer = styled.footer`
    max-width: 1148px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 44px;
    margin: 0 auto;

    p{
        color: #051F20;
        opacity: 0.4;
        margin-bottom: 24px;
    }
`

export const FootertTitle = styled.div`
    color: #051F20;
    text-align: center;
    margin-bottom: 24px;
    h6 {
        font-weight: 500;
        font-size: 1.5rem;
    }
`
export const FooterNav = styled.nav`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;
    a {
        text-decoration: none;
        color: #051F20;
        padding: 0.5rem;
    }
    @media (max-width: 600px) {
        flex-direction: column;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 36px;
    margin-bottom: 24px;
`