import Banner from '../../components/Banner';
import styled from 'styled-components';
import Collapse from '../../components/Collapse';

const AboutContent = [
    {
        title: 'Fiabilité',
        content:
            'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
        title: 'Respect',
        content:
            'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
        title: 'Service',
        content:
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
        title: 'Sécurité',
        content:
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
];

const AboutContainer = styled.div`
    min-height: calc(100vh - 209px);
    padding-top: 40px;

    @media (max-width: 768px) {
        padding-top: 16px;
`;

const CollapseContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 0 auto;

    @media (max-width: 768px) {
        width: 90%;
`;
const About = () => {
    return (
        <AboutContainer>
            <Banner />
            <CollapseContainer>
                {AboutContent.map(({ title, content }) => (
                    <Collapse key={title} label={title}>
                        {content}
                    </Collapse>
                ))}
            </CollapseContainer>
        </AboutContainer>
    );
};

export default About;
