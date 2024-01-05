import logo from './logo.svg';
import './App.css';
import Container from './Pages/Container';
import Enroll from './Pages/Enroll';
import { Route, Routes, useLocation, Navigate, redirect } from 'react-router-dom';
function App() {
  const location = useLocation();
  return (
    <div className="App">
 
    <Routes location={location} key={location.pathname}>
    <Route path="/home" element={<Container/>} />
    <Route path="/enroll" element={<Enroll/>} />
    <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
    </div>
  );
}

export default App;
