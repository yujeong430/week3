import React from 'react';
import loginBtn from '../img/kakaoLoginBtn.png'

const KakaoLogin = () => {
    const Rest_api_key = process.env.REACT_APP_KAKAO_API_KEY;
    const redirect_uri = process.env.REACT_APP_KAKAO_REDIRECT_URI;

    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

    const handleLogin = () => {
        window.location.href = kakaoURL;
    };

    return (
        <>
            <img src={loginBtn} alt='login' onClick={handleLogin}/>
        </>
    );

};

export default KakaoLogin;