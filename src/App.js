import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Feature from './Components/Feature/Feature';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <Feature/>
    </div>
  );
}

export default App;
