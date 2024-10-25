import React, { useEffect } from 'react';
import './FallingStars.css';

const FallingStars = () => {
    useEffect(() => {
        const starContainer = document.querySelector('.star-container');

        const createStar = () => {
            const star = document.createElement('div');
            star.className = 'star';

            // Decide aleatoriamente si la estrella comienza en la parte izquierda o derecha
            const fromLeft = Math.random() < 0.5;

            // Iniciar desde fuera de la pantalla
            if (fromLeft) {
                star.style.left = -10 + 'px'; // Comenzar desde fuera de la pantalla por la izquierda
                star.style.top = Math.random() * 100 + 'vh'; // Posición vertical aleatoria
            } else {
                star.style.left = '100vw'; // Comenzar desde fuera de la pantalla por la derecha
                star.style.top = Math.random() * 100 + 'vh'; // Posición vertical aleatoria
            }

            // Tamaño aleatorio
            const size = Math.random() * 5 + 5 + 'px'; // Ancho aleatorio entre 5 y 10px
            star.style.width = size;
            star.style.height = size; // Mantener forma circular

            // Ajustar la duración y el retraso de la animación
            star.style.animationDuration = Math.random() * 3 + 2 + 's'; // Duración aleatoria entre 2 y 5 segundos
            star.style.animationDelay = Math.random() * 2 + 's'; // Retraso aleatorio

            starContainer.appendChild(star);

            // Eliminar la estrella después de la animación
            setTimeout(() => {
                star.remove();
            }, 5000); // Tiempo de vida de la estrella
        };

        const intervalId = setInterval(createStar, 100); // Crear estrellas cada 100 ms

        return () => clearInterval(intervalId);
    }, []);

    return <div className="star-container"></div>;
};

export default FallingStars;
