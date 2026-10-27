import React from 'react';
import ReactDOM from 'react-dom/client';
// Self-hosted fonts: no render-blocking request to Google Fonts
import '@fontsource-variable/outfit/wght.css';
import '@fontsource/orbitron/latin-700.css';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
