import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonText, ButtonText2, Button2, Container } from '../styles/HomeStyle';

const Home = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Button2 onClick={() => navigate('/KakaoLogin')}>
                <ButtonText>Login.</ButtonText>
                <ButtonText2>카카오 아이디로 로그인</ButtonText2>
            </Button2>
        </Container>
    );
};

export default Home;