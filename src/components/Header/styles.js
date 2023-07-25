import styled from "styled-components";

export const NavContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1148px;
    padding: 24px 0px 24px 0px;

    .mobile {
      display: none;
    }

    @media(max-width: 900px) {
      .mobile {
        display: initial;
      }
      .nav {
        display: none;
      }
    }

`
export const NavLogo = styled.a`
    font-weight: 800;
    font-size: 1.25rem;
    line-height: 1.3rem;
    text-decoration: none;
    color: #ffffff;
`
export const NavMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    padding: 0px;
    gap: 20px;

    .nav-links {
        font-weight: 400;
        font-size: 1.125rem;
        text-decoration: none;
        color: #ffffff;
        cursor: pointer;
        padding: 6px 12px;
        border-radius: 5px;
        transition: .5s;

        &:hover{
          background-color: #00000089;
        }
    }
`

