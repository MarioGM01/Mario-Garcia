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
                        <p>Texto sencillo sobre la aplicación. Aquí puedes describir las funcionalidades principales o beneficios de la app.</p>
                    </div>

                    {/* Bloque 3: Botones de descarga */}
                    <div className="AppBlock">
                        <button className="download-btn">
                            <a className='a-th' href="/APKGYM.apk" download="GYM.apk" id="cv-button">
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
