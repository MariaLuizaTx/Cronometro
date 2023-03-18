import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
    margin:0;
    padding: 0;
    box-sizing: border-box; 
    }
`;

export const Containerum = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #023f4a;


    h1{
        margin-bottom: 25px;
        color: white;
        font-size:6em;
        text-shadow: 10px 10px 12px black;
        
    }
`;

export const Cronometro = styled.section`
    height: 75vh;
    width: 34vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #01687b;
    border: solid 3px gray;
    border-radius: 30px;
    box-shadow: 10px 10px 30px black;

`;

export const Botoes = styled.section`
    height: 30vh;
    width: 30vw;
    margin-bottom: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;



    button{
    height: 6vh;
    width: 8vw;
    color: white;
    font-size: 1.5em;
    background-color: #184E68;
    border: #106AD2 2px solid;
    border-radius: 25px;
    box-shadow: 5px 5px 10px black;
        
        &:hover{
                transform: scale(106%) ;
                transition: 0.7s ease-out;
                font-weight: 600;
                cursor: pointer;
        
        }
    }

    div{
        height: 15vh;
        width: 28vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }
`;