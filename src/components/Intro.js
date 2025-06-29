import profileImage from '../assets/img/thimea-holleville-cv.jpg';
import '../styles/components/Intro.css';

function Intro() {
    return (
        <div className="intro-component">
            <div className="about-intro-component">
                <h1>Thiméa Holleville</h1>
                <p className="subtitle">Développeuse Full Stack</p>
                <p>
                    Actuellement développeuse back-end Java en alternance chez CGI, je termine cette année mon <strong>Master 2 Informatique
                    – Communication et Intégration Multimédia</strong> à l’Université Lumière Lyon 2. Ayant déménagé à Lyon pour mes études, 
                    je souhaite désormais m’installer à <strong>Caen</strong> afin de me rapprocher de ma famille.Je suis donc à la recherche d’un poste
                    de <strong>développeuse full stack à partir de mi-octobre</strong>, idéalement situé à Caen ou dans ses environs.
                </p>
                <div className="intro-buttons">
                    <button className="btn-minimal primary">
                        Mes Projets
                    </button>
                    <button className="btn-minimal">
                        Me Contacter
                    </button>
                </div>
            </div>
            <div className="picture-and-links-intro-component">
                <img src={profileImage} alt="Thiméa Holleville"/>
            </div>
        </div>
    )
}

export default Intro;