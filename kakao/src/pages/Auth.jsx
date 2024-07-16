import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../api';

const Auth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
         // 백에 인가 코드를 보내서 토큰을 받아옴
        let code = new URL(window.location.href).searchParams.get('code');
        const response = await axiosInstance.post('/auth/kakao/login', { access_code: code });
        // 토큰을 localstorage에 저장
        localStorage.setItem('access_token', response.data.access_token);
        localStorage.setItem('refresh_token', response.data.refresh_token);
        // 로그인 완료 후 마이페이지로 이동
        navigate('/myprofile');
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <>
      <div>로그인 중 ...</div>
    </>
  );
};

export default Auth;
