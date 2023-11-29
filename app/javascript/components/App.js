// App.js
import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Greeting} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
