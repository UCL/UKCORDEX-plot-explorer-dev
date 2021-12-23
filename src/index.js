import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PlotExplorerRow from './components/PlotExplorerContainer';
import About from './components/ExtraPages/About';
import PlotHelp from './components/ExtraPages/PlotHelp';
import Help from './components/ExtraPages/Help';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Router>
    <Routes>
    <Route path="/" element={<PlotExplorerRow />} />
    <Route path="/about" element={<About />} />
    <Route path="/plot-help" element={<PlotHelp />} />
    <Route path="/help" element={<Help />} />
  </Routes>
  </Router>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();