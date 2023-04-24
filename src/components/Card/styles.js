import styled from "styled-components";

export const CardContainer = styled.div`
    max-width: 340px;
    filter: drop-shadow(5px 4px 10px rgba(0, 0, 0, 0.3));
    a {
        text-decoration: none;
    }

    &:hover {
        cursor: pointer;
    }
`

export const CardImage = styled.div`
    width: 100%;
    height: 306px;
    overflow: hidden;
    background-color: red;
    border-radius: 25px 25px 0px 0px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
        &:hover {
            -webkit-transform: scale(1.1);
            transform: scale(1.05);
        }
    }
`

export const CardInfo = styled.div`
    width: 100%;
    padding: 20px;
    background: linear-gradient(180deg, #0B2B26 0%, #235347 100%);
    border-radius: 0px 0px 25px 25px;
`

export const CardTittle = styled.h4`
    color: #ffffff;
    text-align: left;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.313rem;
    margin-bottom: 8px;
`

export const CardText = styled.p`
    color: #ffffff;
    text-align: left;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1rem;
    margin-bottom: 24px;
    height: 50px;


    -webkit-line-clamp: 3;
    display: -webkit-box;
    line-height: 1.2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const CardButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
`