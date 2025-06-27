import React, { useEffect, useState } from 'react';

function Competences() {
    const [competences, setCompetences] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5106/api/competences')
        .then(response => response.json())
    .then(data => setCompetences(data))
    .catch(error => console.error('Error fetching competences:', error));
    }, []);

    return (
        <div>
            <h2>Mes compétences</h2>
            <ul>
                {competences.map(c => (
                    <li key={c.id}>
                        {c.nom} ({c.categorie}) - Niveau : {c.niveau}/5
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Competences;