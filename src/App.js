import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Feature from './Components/Feature/Feature';
import Classroom from './Components/Classroom/Classroom';
import Aboutceo from './Components/Aboutceo/Aboutceo';
import Point from './Components/Point/Point';
import Testimonials from './Components/Testimonials/Testimonials';
import Employee from './Components/Employee/Employee';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
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
        <Employee/>
        <Blogs/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
