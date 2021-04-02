import React from 'react';
import Home from './pages/home'
import GlobalStyles from "./components/GlobalStyles";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Login from './pages/login';
import About from './pages/about';


function App() {
  
  return (
    <div className="App">
      <Router>
      <GlobalStyles />
      <Nav />
      <Switch>
      <Route path="/pages/login" component={Login} />
      <Route path="/pages/about" component={About} />
      <Route path={["/game/:id", "/"]} exact>
        <Home />
      </Route> 
      </Switch>
      </Router>
    </div>
  );
};

export default App;
