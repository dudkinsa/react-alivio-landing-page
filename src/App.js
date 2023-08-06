import Header from './Layout/Header/Header';
import Main from './Pages/Main';
import Footer from './Layout/Footer/Footer';
import './App.scss';
import Navigation from './Layout/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Footer />
    
    </div>
  );
}

export default App;
