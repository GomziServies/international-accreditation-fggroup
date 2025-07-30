import './assets/css/main.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/partials/header';
import Home from './pages/home';
import Footer from './components/partials/footer';
import { useSiteScripts } from './assets/js/main';
import { useEffect } from 'react';
import Aos from 'aos';

function App() {
  useSiteScripts();

  useEffect(() => {
    Aos.init({
      duration: 800,           
      offset: 200,               
      once: true,                
      easing: "ease-in-out",      
      anchorPlacement: "top-bottom" 
    });
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
