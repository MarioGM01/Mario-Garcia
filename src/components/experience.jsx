// inicio.jsx
import React from 'react';
import './experience.css'
import { experiences } from './experience';


export function Experience() {
    return (
        <>
            <div id='case-info'>
                <div className="timeline">
                    <div>
                        <h1 id='titleExperience'>Experiencia</h1>
                    </div>
                    {experiences.map((exp, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-point"></div>
                            <div className="timeline-content">
                                <h4>{exp.year}</h4>
                                <h3>{exp.title}</h3>
                                <h4>{exp.title}</h4>
                                <h5>{exp.description}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
};
