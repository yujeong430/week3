import { Routes, Route } from 'react-router-dom';
import KakaoLogin from './pages/KakaoLogin.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<KakaoLogin/>}/>
      <Route path="/auth" element={<Home />} />
    </Routes>
  );
}
export default App;
