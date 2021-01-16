import React from 'react';
import {HashRouter as Router} from 'react-router-dom'
import './assets/main.css'

import Layout from './components/Layout'


function App() {
  return (
    <div className="App">
      <Router>
        <Layout/>
      </Router>
    </div>
  );
}

export default App;
