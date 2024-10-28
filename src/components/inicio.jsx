// inicio.jsx
import React from 'react';
import './inicio.css'
import logo from '../imgs/foto-perfil.png'
import iconDownload from '../imgs/download.png'
import cvFile from '../documents/CvMario.pdf'
import linkeIcon from '../imgs/iconLinckeding.svg'
import gmIcon from '../imgs/iconsGmail.svg'
import gitIcon from '../imgs/iconsGitHub.svg'

export function Inicio() {
    return (
        <>
            <div>
                <div id='case-info'>
                    <div className='box-content'>
                        <div className='box-inf'>
                            <h1 id='h1-name-inicio'>Mario Garcia Martinez</h1>
                            <h3 id='h3-web'>Web developer</h3>
                            <div>
                                <a href={cvFile} download="MarioGarcia_CV.pdf" id="cv-button">
                                    <img src={iconDownload} alt="icono de descarga" className="icono-boton" />
                                    <span>Descargar CV</span>
                                </a>
                            </div>
                        </div>
                        <div className='box-img'>
                            <img id='img-perfil' src={logo} alt="foto-perfil" />
                        </div>
                    </div>
                </div>

                <div className="linkedIn-icons">
                    <a href="https://www.linkedin.com/in/mario-garcía-martínez-70846b283" target="_blank" >
                        <img src={linkeIcon} alt="LinkedIn" className="icon imgsIcons" />
                    </a>
                    <a href="https://github.com/MarioGM01" target="_blank" >
                        <img src={gitIcon} alt="GitHub" className="icon imgsIcons" />
                    </a>
                    <a href="mailto:mariogm1908@gmail.com">
                        <img src={gmIcon} alt="Email" className="icon imgsIcons" />
                    </a>
                </div>
            </div>
        </>

    );
};
