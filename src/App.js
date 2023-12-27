import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Feature from './Components/Feature/Feature';
import Classroom from './Components/Classroom/Classroom';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <Feature/>
        <Classroom/>
    </div>
  );
}

export default App;
