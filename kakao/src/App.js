import { Routes, Route } from 'react-router-dom';
import KakaoLogin from './pages/KakaoLogin.jsx';
import Auth from './pages/Auth.jsx';
import MyProfile from './pages/MyProfile.jsx';
import Profiles from './pages/Profiles.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<KakaoLogin/>}/>
      <Route path="/auth/kakao" element={<Auth />} />
      <Route path="/myprofile" element={<MyProfile/>} />
      <Route path="/profiles" element={<Profiles/>} />
    </Routes>
  );
}
export default App;
