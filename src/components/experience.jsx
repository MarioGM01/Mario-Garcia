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
                            <div className="timeline-content">
                                <h2>{exp.location}</h2>
                                <h4>{exp.year}</h4>
                                <h3>{exp.title}</h3>
                                <p>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
};
