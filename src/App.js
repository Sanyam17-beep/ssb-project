import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Feature from './Components/Feature/Feature';
import Classroom from './Components/Classroom/Classroom';
import Aboutceo from './Components/Aboutceo/Aboutceo';
import Point from './Components/Point/Point';
import Testimonials from './Components/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <Feature/>
        <Classroom/>
        <Point/>
        <Aboutceo/>
        <Testimonials/>
        
        <div className='empty'/>
    </div>
  );
}

export default App;
