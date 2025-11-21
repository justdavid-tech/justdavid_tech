import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <div className='overflow-x-hidden'>
    <App />
    </div>
  </React.StrictMode>
  </BrowserRouter>
);
