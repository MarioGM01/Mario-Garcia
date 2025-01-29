import React from 'react';
import './Apps.css';
import Logo from '../imgs/Logo-Apk-GYM.png'; // Importar la imagen correctamente

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
                        <button className="download-btn">
                            <a href="/APKGYM.apk" download="GYM.apk" id="cv-button">
                                Descargar APK
                            </a>
                        </button>
                        <button className="download-btn iphone-disabled" disabled>
                            Descargar iPhone (mantenimiento)
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
