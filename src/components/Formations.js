import React, {useEffect, useState} from 'react';
import '../styles/components/Formations.css';

function Formations() {
    //stocker les formations
    //formations : nom de la const, setFormations permet de modifier la const, useState() veut dire que la liste est initialiser a vide
    const [formations, setFormations] = useState([])

    //gérer le loading
    const [loading, setLoading] = useState(true);
    //gérer les erreurs
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFormations = async () => {
            try {
               const response = await fetch('http://localhost:5106/api/formations');

               if (!response.ok) {
                throw new Error('Erreur API');
               }

               const data = await response.json();
               setFormations(data);
            }
            catch (err) {
                setError(err.message);
            }
            finally {
                setLoading(false);
            }
        }     
        fetchFormations();   
    }, []); //Permet de définir quand executer useEffect, ici on ne l'effectue qu'une seule fois (sinon boucle infinie)
    //par exemple si je mets userID, quand la valeur de userID changera il se re-executera 

    return(
        <div className='formations-component'>
            <h2>Formations</h2>

            {/* si loading true */}
            {loading && <p>Chargement ...</p>}
            {error && <p>Erreur : {error}</p>}

            {/* Affichage de la liste des formations */}
            {!loading && !error && formations.length > 0 && (
                <div className="formations-list">
                    {formations.map((formation) => (
                        <div key={formation.id} className="formation-item">
                            <div className="formation-header">
                                <h3>{formation.intitule}</h3>
                                <div className="formation-period">{formation.dateDebut} - {formation.dateFin}</div>
                            </div>
                            <p className="formation-location">{formation.ecole}, {formation.ville}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* Si aucune formation trouvée */}
            {!loading && !error && formations.length === 0 && (
                <p>Aucune formation trouvée.</p>
            )}
        </div>
    )
}

export default Formations;
