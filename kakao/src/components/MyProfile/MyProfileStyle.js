import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E0ECF8;
    width: 500px;
    height: 450px;
    border-radius: 30px;
`

export const Title = styled.div`
    font-size: 30px;
    font-weight: 600;
    margin: 40px 0px 30px 0px;
    padding-bottom: 3px;
    border-bottom: 1px solid #084B8A;
`

export const InputLong = styled.textarea`
    border: none;
    border-radius: 10px;
    width: 200px;
    height: 100px;
    padding: 5px;
    margin-top: 5px;
    font-size: 14px;
`

export const Button = styled.button`
    border: none;
    border-radius: 10px;
    background-color: #084B8A;
    color: white;
    width: 100px;
    height: 40px;
    font-size: 15px;
    margin: auto 5px 40px 5px;
    cursor: pointer;
`

export const ShowText = styled.div`
    font-size: 20px;
    margin-bottom: 15px;
    max-width: 400px;
`


