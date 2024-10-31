import React, { useEffect } from 'react';
import './stack.css';
import { myStack } from "./stack.js";

export const Stack = () => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            document.querySelectorAll('.itemStack').forEach((item) => {
                const rect = item.getBoundingClientRect();
                const x = e.clientX - rect.left; // Posición X dentro del elemento
                const y = e.clientY - rect.top;  // Posición Y dentro del elemento
                item.style.setProperty('--x', `${x}px`);
                item.style.setProperty('--y', `${y}px`);
            });
        };

        document.querySelectorAll('.itemStack').forEach((item) => {
            item.addEventListener('mousemove', handleMouseMove);
            item.addEventListener('mouseleave', () => {
                item.style.setProperty('--x', '50%');
                item.style.setProperty('--y', '50%');
            });
        });

        return () => {
            document.querySelectorAll('.itemStack').forEach((item) => {
                item.removeEventListener('mousemove', handleMouseMove);
            });
        };
    }, []);

    return (
        <div id='case-info-stack'>
            <div className="blockIconsStack">
                <h1 id='titleStack'>Stack</h1>
                <div className='blockStack'>
                    {myStack.map((stack, index) => (
                        <div key={index} className='itemStack'>
                            <img className='imgStack' src={stack.icon} alt="" />
                            <p className='pStack'>{stack.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
