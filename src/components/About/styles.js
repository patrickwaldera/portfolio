import styled from "styled-components";

export const AboutContainer = styled.section`
    max-width: 1148px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`

export const Info = styled.div`
    max-width: 1148px;
    padding: 72px 0px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    gap: 61px;

    h1 {
        color: #ffffff;
        margin-bottom: 2.5rem;
        font-weight: 700;
        font-size: 3.5rem;
        line-height: 4.125rem;

        @media(max-width: 480px) {
            font-size: 2.5rem;
        }
    }

    .info-txt {
        max-width: 632px;
    }
`

export const InfoDiv = styled.div`
    border-left: 3px solid #FFFFFF;
    margin-bottom: 1.75rem;

    h3 {
        font-weight: 400;
        font-size: 1.5rem;
        color: #ffffff;
        margin: 0px 0px 15px 26px;
    }

    p {
        font-weight: 400;
        font-size: 14px;
        color: #ffffff;
        margin-left: 26px;
        text-align: justify;
    }
`

export const AboutImg = styled.img`
    width: 455px;
    height: auto;

    max-width: 100%;
    
    border: 3px solid rgba(255, 255, 255, 0.4);
    filter: drop-shadow(-40px 20px 75px rgba(218, 241, 222, 0.1));
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    object-fit: cover;

    animation: profileImage__animate 10s ease-in-out alternate infinite;


    @keyframes profileImage__animate {
        0% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        }

        50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30%;
        }
        
        100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        }

    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 24px;
    margin-left: 1.813rem;
`