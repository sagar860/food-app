import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './components/About';

function App() {
  return (
    
    <div className="App">
      <Router>
      <Sidebar/>
      <div className="container">
      <Switch>
        
       <Route path="/" component={About}>
       </Route>
    
      </Switch>
      </div>
      </Router>
    </div>
    
  );
}

export default App;
