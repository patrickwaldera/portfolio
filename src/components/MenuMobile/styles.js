import styled, { css } from "styled-components";

export const Container = styled.div`
    position: absolute;
    backdrop-filter: blur(3px);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(17, 18, 17, 0.95);
    background: linear-gradient(180deg, rgba(11, 43, 38, 0.95) 0%, rgba(5, 31, 32, 0.95) 100%);

    opacity: 0;
    pointer-events: none;

    transition: .3s;
    transform: translateY(50px);

    svg{
        color: #ffffff;
        position: absolute;
        top: 2.5rem;
        right: 2.5rem;
    }
    
    ${({ isVisible }) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0px);
    `} 

`
export const NavMenu = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    a {
        font-weight: 400;
        font-size: 1.5rem;
        text-decoration: none;
        color: #ffffff;
    }
`