import Banner from '../../components/Banner';
import styled from 'styled-components';
import colors from '../../utils/Style/color';
import Card from '../../components/Card';
import { useState, useEffect } from 'react';

const HomeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    margin: 0 auto;
`;

const CardContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 100px 0 auto;
    padding-top: 50px;
    border-radius: 25px;
    background: ${colors.background};

    @media (max-width: 768px) {
        background: none;
        margin: 0 auto;
`;

const Home = () => {
    const [lodgements, setLodgements] = useState([]);

    useEffect(() => {
        fetch('./logements.json')
            .then((response) => response.json())
            .then((data) => setLodgements(data));
    }, []);

    return (
        <HomeContainer>
            <Banner />
            <CardContainer>
                {lodgements.map((lodgement) => (
                    <Card
                        key={lodgement.id}
                        title={lodgement.title}
                        cover={lodgement.cover}
                        id={lodgement.id}
                    />
                ))}
            </CardContainer>
        </HomeContainer>
    );
};

export default Home;
