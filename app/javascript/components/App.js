// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Greeting from './Greeting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Greeting} />
        {/* Other routes can be added here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
