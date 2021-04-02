import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
     <h1>List Of My Favourite Netflix Series</h1>
    <div className="main">
    <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
