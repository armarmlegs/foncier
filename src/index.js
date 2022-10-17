import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  'bootstrap/dist/css/bootstrap.css'; 
import 'font-awesome/css/font-awesome.css';


console.log("randomaccessmemories", process.env.REACT_APP_NAME)


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


