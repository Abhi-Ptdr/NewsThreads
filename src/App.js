import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {  //but first install react-router-dom "npm install react-router-dom" refer Docs: https://v5.reactrouter.com/web/guides/quick-start
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={6} country="us" category="general"/>} />
            <Route exact path="/business" element={<News key="business" pageSize={6} country="us" category="business"/>} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={6} country="us" category="entertainment"/>} />
            <Route exact path="/general" element={<News key="general" pageSize={6} country="us" category="general"/>} />
            <Route exact path="/health" element={<News key="health" pageSize={6} country="us" category="health"/>} />
            <Route exact path="/science" element={<News key="science" pageSize={6} country="us" category="science"/>} />
            <Route exact path="/sports" element={<News key="sports" pageSize={6} country="us" category="sports"/>} />
            <Route exact path="/technology" element={<News key="technology" pageSize={6} country="us" category="technology"/>} />
            {/* we have to use exact for exact matching of routes and a key="" to the News compo to uniquely identifing each news component and remount it when user switch to any route*/}
          </Routes>
        </Router>
      </div>
    )
  }
}

