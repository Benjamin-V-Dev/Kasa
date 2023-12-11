import React from 'react';
import ReactDOM from 'react-dom/client'; // Import modifié pour React 18
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

// Création de la racine et rendu de l'application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
