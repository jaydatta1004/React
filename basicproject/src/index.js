import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import myfun from './App';
import {App , myfun} from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <myfun />
  
  </React.StrictMode>
);
// const noroot = ReactDOM.createRoot(document.getElementById('root1'));
// noroot.render(
//   <React.StrictMode>
//     <myfun />
  
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
