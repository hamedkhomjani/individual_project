
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";

function App() {
  return (
    <div className="App">
      <Router>
        <div className='first-row'>
        <Header />
        <Landing />
        </div>
        <div className='second-row'>
          <Footer />
          </div>
        

        <Switch>
          <Route path='/' ></Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
