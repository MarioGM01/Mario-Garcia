import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import FallingStars from './components/FallingStars';
import { Inicio } from './components/inicio';
import { Experience } from "./components/experience.jsx";
import { Stack } from './components/stack.jsx';
import { Footer } from './components/footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      {/* <FallingStars /> */}
      <Inicio />
      <Experience />
      <Stack />
      <Footer />
    </>
  </StrictMode>,
);
