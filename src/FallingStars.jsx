import React, { useEffect } from 'react';
import './FallingStars.css';

const FallingStars = () => {
    useEffect(() => {
        const starContainer = document.querySelector('.star-container');

        const createStar = () => {
            const star = document.createElement('div');
            star.className = 'star';

            // Iniciar desde fuera de la pantalla en la parte superior
            star.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
            star.style.top = -10 + 'px'; // Comenzar justo fuera de la pantalla
            star.style.animationDuration = Math.random() * 2 + 1 + 's'; // Duración aleatoria
            star.style.animationDelay = Math.random() * 3 + 's'; // Retraso aleatorio

            // Agregar una ligera variación en la dirección horizontal de la animación
            star.style.transform = `translateX(${Math.random() * 20 - 10}px)`; // Variación de -10 a +10 px en X

            starContainer.appendChild(star);

            setTimeout(() => {
                star.remove();
            }, 3000); // Tiempo de vida de la estrella
        };

        const intervalId = setInterval(createStar, 150); // Crear estrellas cada 150 ms

        return () => clearInterval(intervalId);
    }, []);

    return <div className="star-container"></div>;
};

export default FallingStars;
