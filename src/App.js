import logo from './logo.svg';
import './App.css';
import 'react-tiger-transition/styles/main.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Index from './components/layout/Index';
import { Link, glide, Navigation } from 'react-tiger-transition';

function App() {
  return (
    <Router>
      <Navigation>
        <Route exact path='/' component={Index}></Route>
        <Route exact path='/home' component={Home}></Route>
      </Navigation>
    </Router>
  );
}

export default App;
