import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FallingStars from './FallingStars'; // Importa el componente FallingStars

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <FallingStars /> {/* Añade el componente aquí */}
    </>
  </React.StrictMode>,
);
