import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import FallingStars from './components/FallingStars';
import './index.css';
import { Inicio } from './components/inicio';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <div className="background-container">
      <FallingStars />
    </div>
      <Inicio></Inicio>
    </>
  </StrictMode>,
);
