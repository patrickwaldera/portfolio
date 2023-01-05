import styled from "styled-components";

export const QualificationsContainer = styled.section`
    max-width: 1148px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 44px;
    margin: 0 auto;
`

export const QualificationsTitle = styled.header`
    color: #ffffff;
    text-align: center;
    margin: 2.25rem 0 2.25rem 0;

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

export const TimelineContainer = styled.div`
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 44px;
    color: white;

    .css-vcfpfv {
        transform: 0 !important;
        background: linear-gradient(180deg, #E4FFE9 0%, #A7FFB6 100%);
        outline: 0px;
        display: block;
        margin: 0;
        position: absolute;
        top: 0;
        left: 1.36em;
        width: 21px;
        height: 21px;
        border-radius: 100%;
    }

    .css-1b3lipl:before{
        background-color: #ffffff;
        width: 3px;
        top: 3px;
        height: 95%;
    }

    .css-692fgp{
        color: #000000;
        background-color: #ffffff;
    }

    .css-o1utbh p, h3, h4 {
        font-family: 'Roboto', sans-serif !important;
    }

    .css-o1utbh h3 {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 8px;
    }    

    .css-o1utbh h4 {
        opacity: 0.4;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-align: justify;
    }
`

export const ExpContainer = styled.div`
    max-width: 554px;
    margin: 20px;
    p{
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 2.25rem;
        text-align: center;
    }
`