import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from './components/pages/Search/Search';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Search} />
          {/* <Route exact path="/saved" component={Saved} /> */}
        </Switch>
      </div>
    </Router>
  )
}
  


export default App;
