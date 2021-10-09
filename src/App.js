import './App.css';
import Home from './pages';
import About from './pages/about';
import Blog from './pages/blog';
import Leetcode from './pages/leetcode';
import Contact from './pages/contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/leetcode" component={Leetcode} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </ Router>
  );
}

export default App;
