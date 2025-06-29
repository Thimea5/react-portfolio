import React, { useEffect, useState } from 'react';
import '../styles/components/Competences.css';

//useEffect : Permet de lancer du code après le rendu du composant.
//useState : Gérer l'état d'un composant, lui permet d'avoir une mémoire interne.

function Competences() {
    const [competences, setCompetences] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5106/api/competences')
        .then(response => response.json())
    .then(data => setCompetences(data))
    .catch(error => console.error('Error fetching competences:', error));
    }, []);

    return (
        <div className="competences-component">
            <h2>Mes compétences</h2>
            <ul className="competences-grid">
                {competences.map(c => (
                    <li key={c.id} className="competence-item" data-category={c.categorie}>
                        <div className="competence-header">
                            <h3 className="competence-name">{c.nom}</h3>
                            <span className="competence-category">{c.categorie}</span>
                        </div>
                        <div className="competence-level">
                            <div className="level-label">
                                <span>Niveau</span>
                                <span>{c.niveau}/5</span>
                            </div>
                            <div className="progress-bar">
                                <div 
                                    className="progress-fill" 
                                    style={{ width: `${(c.niveau / 5) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Competences;