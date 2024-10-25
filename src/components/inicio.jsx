// inicio.jsx
import React from 'react';
import './inicio.css'
import logo from '../imgs/foto-perfil.png'

export function Inicio() {
    return (
        <>
            <div id='case-info'>
                <div className='box-content'>
                    <div className='box-inf'>
                        <h1 id='h1-name-inicio'>Mario Garcia Martinez</h1>
                        <h3 id='h3-web'>Web developer</h3>
                    </div>
                    <div className='box-img'>
                        <img id='img-perfil' src={logo} alt="foto-perfil" />
                    </div>
                </div>
            </div>
        </>

    );
};
