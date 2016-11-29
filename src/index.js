import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

if (process.env.NODE_ENV === 'development')
{
  var Perf = require('react-addons-perf');
  window.Perf = Perf;
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
