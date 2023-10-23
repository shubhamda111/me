import './App.css';
import {useEffect} from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills'
import Work from './components/Work';
import Project from './components/Projects';
import Certificate from './components/Certificate';
import Edu from './components/Education';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
    useEffect(() => {
      document.title = 'Shubham srivastava';
      AOS.init();
    }, []);
  return (
    <div className="px-6 lg:px-20 xl:px-36 bg-dark-500">
      <Navbar />
      <Home />
      <Skills />
      <Work />
      <Project />
      <Edu />
      <Certificate />
      <Footer />
    </div>
  );
}

export default App;
