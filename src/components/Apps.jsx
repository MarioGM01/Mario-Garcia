import React from 'react';
import './Apps.css';
import Logo from '../imgs/Logo-Apk-GYM.png'; // Importar la imagen correctamente
import LogoGit from '../imgs/stack/iconsGitHub.svg'

export function Apps() {
    return (
        <div id="caseExperience">
            <div className="timeline">
                <h1 id="titleExperience">Proyectos</h1>

                <div className="Box-Apps">
                    {/* Bloque 1: Logo */}
                    <div className="AppBlock">
                        <img className="Img" src={Logo} alt="Logo GYM" />
                    </div>

                    {/* Bloque 2: Descripción */}
                    <div className="AppBlock">
                        <p>Aplicación sencilla para recién iniciados en el gimnasio, construida con React Native y Expo para una experiencia de usuario fluida y accesible.</p>
                    </div>

                    {/* Bloque 3: Botones de descarga */}
                    <div className="AppBlock">
                        <a href="https://github.com/MarioGM01/Gym" target="_blank" rel="noopener noreferrer">
                            <div className="itemStack">
                                {/* Ruta relativa correcta para la imagen de GitHub */}
                                <img className="imgStack" src={LogoGit} alt="GitHub" />
                                <p className="pStack">Ver en GitHub</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
