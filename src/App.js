import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import './App.scss';
import Home from './Pages/Home/Home';
import WhyAlivio from './Pages/WhyAlivio/WhyAlivio';
import Solution from './Pages/Solution/Solution';
import Community from './Pages/Community/Community';
import Pricing from './Pages/Pricing/Pricing';
import Auth from './Pages/Auth/Auth';
import HowItWorks from './Layout/HowItWorks/HowItWorks';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-alivio" element={<WhyAlivio />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/community" element={<Community />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/authorization" element={<Auth />} />
        </Routes>
        <HowItWorks />
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
