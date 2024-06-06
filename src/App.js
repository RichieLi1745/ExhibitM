
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LandingPageSecret from './components/LandingPageSecret';
import Home from './components/Home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/secret" element={<LandingPageSecret/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </Router>

  );
}

export default App;
