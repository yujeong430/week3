import { Routes, Route } from 'react-router-dom';
import KakaoLogin from './pages/KakaoLogin.jsx';
import Auth from './pages/Auth.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<KakaoLogin/>}/>
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}
export default App;
