import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import FallingStars from './components/FallingStars';
import { Inicio } from './components/inicio';
import { Experience } from "./components/experience.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <div className="background-container">
        <FallingStars />
      </div>
      <Inicio />
      <Experience />

    </>
  </StrictMode>,
);
