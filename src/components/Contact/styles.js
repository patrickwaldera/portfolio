import styled from "styled-components";

export const ContactContainer = styled.section`
    max-width: 1148px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 44px;
    margin: 0 auto;
`

export const ContactTitle = styled.header`
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

export const Wraper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: start;
`

export const LinkedinContainer = styled.div`
    margin: 0 auto;
    p{
        text-align: center;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        color: #ffffff;
        margin-bottom: 24px;
    }
    padding-bottom: 36px;
`

export const LinkedinBox = styled.div`
    margin: 0 auto;
    width: 340px;
    max-width: 80%;
    background-color: #ffffff;
    border-radius: 25px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        max-width: 48px;
        margin-bottom: 1rem;
    }

    h6 {
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        margin-bottom: 0.5rem;
    }

    p{
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        opacity: 0.75;
        color: #051F20;
    }

    a{
        text-decoration: underline #051F20;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        color: #051F20;
    }

`

export const FormWrapper = styled.div`
    width: 490px;
    margin: 0 auto;
    .title {
        text-align: center;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        color: #ffffff;
        margin-bottom: 24px;
    }
`

export const FormContainer = styled.div`

    form {
        width: 100%;
    }

    .loading{
        color: #ffffff;
        animation: rotate 1s linear infinite;
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(359deg);
        }
    }

    .formResposta{
        color: #ffffff;
        text-align: center;
        transition: 1s;
    }

    .errorMsg {
        text-align: start;
        max-width: 350px;
        color: #f21e08;
        padding: 0;
        margin-top: 5px;
        font-size: 14px;
        font-weight: 300;
    }

    .form-control {
        display: flex;
        flex-direction: column;
        margin: 20px;
    }

    .form-control label {
        font-weight: 400;
        font-size: 14px;
        color: #ffffff;
        width: 100%;
        padding-right: 20px;
        margin-bottom: 5px;
    }

    .form-control input[type="text"] {
        max-width: 100%;
        padding: 5px 5px 5px 20px;
        height: 64px;
        border-radius: 10px;
    }

    .mensage{
        border-radius: 10px;
        height: 128px;
        padding: 20px;
        resize: none;
    }

    button {
        max-width: 198px;
        border-radius: 5px;
    }


`