import React from 'react';
import HomePage from './pages/homepage/homepage.component';

import './App.css';
import { Route } from 'react-router-dom';

const Topic = props => {
  console.log(props);
  return (
    <div>
      <h1>TOPIC PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/topics" component={Topic} />
    </div>
  );
}

export default App;
