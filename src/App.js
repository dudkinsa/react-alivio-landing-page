import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import Home from './Pages/Home/Home';
import WhyAlivio from './Pages/WhyAlivio/WhyAlivio';
import Solution from './Pages/Solution/Solution';
import Community from './Pages/Community/Community';
import Pricing from './Pages/Pricing/Pricing';
import Auth from './Pages/Auth/Auth';
import MobileNav from './Layout/MobileNav/MobileNav';
import MobileBtn from './Layout/MobileBtn/MobileBtn';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <MobileNav />
        <MobileBtn />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-alivio" element={<WhyAlivio />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/community" element={<Community />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/authorization" element={<Auth />} />
        </Routes> 
        <Footer />
      </Router>
    </div>
  );
}

export default App;
