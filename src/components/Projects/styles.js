import styled from "styled-components";

export const ProjectsContainer = styled.section`
    width: 100vw;
    max-width: 1148px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding-bottom: 44px;
`

export const ProjectsTitle = styled.header`
    color: #051F20;
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

export const Carrousel = styled.div`
    width: 100%;

    .slick-slide div {
        margin-left: 0.5rem;
    }

    .slick-prev, .slick-next
    {
        width: 40px;
        height: 40px;
    }

    @media (max-width: 1225px) {
        .slick-prev, .slick-next
        {
            display: none !important;
        }
    }

    .slick-prev:before, .slick-next:before {
        color: black;
        font-size: 36px;
    }

    .slick-dots li button:before
    {
        font-size: 10px;
        margin-top: 20px;
    }

    .slick-prev.slick-disabled:before, .slick-next.slick-disabled:before {
        display: none !important;
    }
    
`