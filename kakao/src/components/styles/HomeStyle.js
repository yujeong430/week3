import styled from 'styled-components';

export const ButtonText = styled.span`
    font-size: 80px;
    font-weight: 800;  
    font-family: Helvetica;
    text-align: left;
`;  

export const ButtonText2 = styled.span`
    font-size: 50px;
    font-weight: 600;
    font-family: Helvetica;
    text-align: left;
`;

export const Button2 = styled.button`
    padding: 20px 30px;
    border: none;
    border-radius: 4px;
    margin: 30px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: 600;
    background-color: white;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: translateX(70px);
    }
`;

export const Container = styled.div`
    margin: 0 140px;
    padding: 0 300px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`;
