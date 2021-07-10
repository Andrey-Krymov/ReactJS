import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const myMsg = ' new message in create-react-app';

ReactDOM.render(
  <App name={myMsg} />,
  document.getElementById('root')
);
reportWebVitals();
