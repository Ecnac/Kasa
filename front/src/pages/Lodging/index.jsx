import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';

const Lodging = () => {
    const [lodgement, setLodgement] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchLodgement = async () => {
            const response = await fetch('/logements.json');
            const data = await response.json();

            // Vérifie si l'id du logement existe
            const lodgement = data.find((lodgement) => lodgement.id === id);
            setLodgement(lodgement);
        };
        fetchLodgement();
    }, [id]);

    // Si l'id du logement ne correspond pas, on redirige vers la page d'erreur
    if (!lodgement) {
        return <Navigate to="/404" />;
    }

    return (
        <div>
            <h1>{lodgement.title}</h1>
            <img src={lodgement.cover} alt={lodgement.title} />
            <p>{lodgement.description}</p>
        </div>
    );
};

export default Lodging;
