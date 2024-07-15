import { Routes, Route } from 'react-router-dom';
import KakaoLogin from './pages/KakaoLogin.jsx';
import Home from './pages/Home.jsx';
import MyProfile from './pages/MyProfile.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<KakaoLogin/>}/>
      <Route path="/auth/kakao" element={<Home />} />
      <Route path="/myprofile" element={<MyProfile/>} />
    </Routes>
  );
}
export default App;
