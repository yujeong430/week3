import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../api';

const Auth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let code = new URL(window.location.href).searchParams.get('code');
        console.log(code);
        const response = await axiosInstance.post('/auth/kakao/login', { access_code: code });
        console.log(response.data);
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
