
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";

function App() {
  return (
    <div className="App">
        <div className='first-row'>
          <BrowserRouter>
          <Header />
          <Landing />
          </BrowserRouter>
        </div>
        <div className='second-row'>
          <Footer />
        </div>
    </div>
  );
}

export default App;
