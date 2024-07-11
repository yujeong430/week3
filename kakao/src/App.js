import React from 'react';
import styled from 'styled-components';
import { Link, Routes, Route } from 'react-router-dom';

import { Header } from './components/styles/AppStyle';
import GlobalStyle from './components/styles/GlobalStyle';

import KakaoLogin from './components/pages/KakaoLogin';
import Home from './components/pages/Home';
import MyProfile from './components/pages/MyProfile';
import Profile from './components/pages/Profile';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledLink to="/">
        <Header>Kakao Login Practice</Header>
      </StyledLink>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/KakaoLogin" element={<KakaoLogin />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
