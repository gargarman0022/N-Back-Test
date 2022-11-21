import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import React, { Component } from 'react'
import Dashboard from './Pages/Dashboard'
import NbackTest from './Pages/Tests/NbackTest';
import audio from './Pages/Tests/audio';
import zero from './Pages/Tests/Nback/Z_back';
import one from './Pages/Tests/Nback/O_back';
import two from './Pages/Tests/Nback/T_back';
import three from './Pages/Tests/Nback/Th_back';
import zeroa from './Pages/Tests/Audio/Z_back';
import onea from './Pages/Tests/Audio/O_back';
import twoa from './Pages/Tests/Audio/T_back';
import threea from './Pages/Tests/Audio/Th_back';
const App = () => {
  return (
      <Router>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/dashboard/tests/n-back-test" exact component={NbackTest}/>
          <Route path="/dashboard/tests/digit-test" exact component={audio}/>
          <Route path="/dashboard/tests/z" exact component={zero}/>
          <Route path="/dashboard/tests/o" exact component={one}/>
          <Route path="/dashboard/tests/t" exact component={two}/>
          <Route path="/dashboard/tests/th" exact component={three}/>
          <Route path="/dashboard/tests/za" exact component={zeroa}/>
          <Route path="/dashboard/tests/oa" exact component={onea}/>
          <Route path="/dashboard/tests/ta" exact component={twoa}/>
          <Route path="/dashboard/tests/tha" exact component={threea}/>
          <Route path="/dashboard" component={Dashboard}/>

        </Switch>
      </Router>
    )
}
export default App
