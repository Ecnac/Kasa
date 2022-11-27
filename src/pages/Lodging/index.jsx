import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/Style/color';
import Carousel from '../../components/Carousel';
import Tags from '../../components/Tags';
import Collapse from '../../components/Collapse';
import Rating from '../../components/Rating';

const LodgingContainer = styled.div`
    min-height: calc(100vh - 209px);
    width: 100%;
    margin: 0 auto;
`;

const HeadInfos = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 auto;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const LodgementInfos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
`;

const Title = styled.h1`
    font-size: 36px;
    font-weight: 500;
    color: ${colors.primary};

    @media (max-width: 768px) {
        font-size: 18px;
`;

const Location = styled.p`
    font-size: 18px;
    margin-top -10px;
    color: ${colors.primary};

    @media (max-width: 768px) {
        font-size: 14px;
        margin-top: -5px;
`;

const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: -10px;

    @media (max-width: 768px) {
        margin-top: 0;
`;

const HostAndRating = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    @media (max-width: 768px) {
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: 0;
    }
`;

const HostInfos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const HostName = styled.p`
    align-self: center;
    font-size: 18px;
    width: 93px;
    margin: 0 -25px 0 0;
    color: ${colors.primary};

    @media (max-width: 768px) {
        font-size: 12px;
        width: 60px;
`;

const ImageContainer = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    overflow: hidden;
    margin-left: 20px;

    @media (max-width: 768px) {
        width: 32px;
        height: 32px;
`;

const HostPicture = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const RatingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    @media (max-width: 768px) {
        margin-top: 0;
`;

const CollapseContainer = styled.div`
    position: relative;
    display: flex;
    width: 95%;
    margin: 0 auto;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 90%;
`;

const ListElement = styled.li`
    list-style: none;
`;

const Lodging = () => {
    const [lodgement, setLodgement] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        fetch(`/logements.json`)
            .then((response) => response.json())
            .then((data) => {
                const lodgement = data.find((lodgement) => lodgement.id === id);
                setLodgement(lodgement);
                setIsLoaded(true);
            });
    }, [id]);

    // Si l'id du logement ne correspond pas, on redirige vers la page d'erreur
    if (!lodgement) {
        return <Navigate to="/404" />;
    }

    if (!isLoaded) {
        return;
    }
    return (
        <LodgingContainer>
            <Carousel images={lodgement.pictures} />
            <HeadInfos>
                <LodgementInfos>
                    <Title>{lodgement.title}</Title>
                    <Location>{lodgement.location}</Location>
                    <TagsContainer>
                        {lodgement.tags.map((tag) => (
                            <Tags key={tag} tags={tag} />
                        ))}
                    </TagsContainer>
                </LodgementInfos>
                <HostAndRating>
                    <HostInfos>
                        <HostName>{lodgement.host.name}</HostName>
                        <ImageContainer>
                            <HostPicture
                                src={lodgement.host.picture}
                                alt="host"
                            />
                        </ImageContainer>
                    </HostInfos>
                    <RatingContainer>
                        <Rating rating={lodgement.rating} />
                    </RatingContainer>
                </HostAndRating>
            </HeadInfos>
            <CollapseContainer>
                <Collapse label="Description">{lodgement.description}</Collapse>
                <Collapse label="Équipements">
                    {lodgement.equipments.map((equipment) => (
                        <ListElement key={equipment}>{equipment}</ListElement>
                    ))}
                </Collapse>
            </CollapseContainer>
        </LodgingContainer>
    );
};

export default Lodging;
