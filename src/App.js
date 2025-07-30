import './assets/css/main.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/partials/header';
import Hero from './components/hero';
import Home from './pages/home';
import About from './pages/about';
import ServiceDetails from './pages/services';
import Footer from './components/partials/footer';
import { useSiteScripts } from './assets/js/main';
import Contact from './pages/contact';

function App() {
  useSiteScripts();

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
