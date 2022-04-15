import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';

function App() {
  return (
    <div className="redux-store">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
