import logo from './logo.svg';
import './App.css';
import { Route, Router, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import history from './history/history';
import Home from './pages/home/index';
import Contact from './pages/contact_us/index';

function App() {
  return (
    <Router history={history}>
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/contact-us" component={Contact}></Route>
        </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
