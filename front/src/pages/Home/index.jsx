import Banner from '../../components/Banner';
import styled from 'styled-components';
import lodgementsList from '../../data/logements.json';
import Card from '../../components/Card';

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
    border-radius: 25px;
    background: #f6f6f6;
`;

console.log(lodgementsList);

const Home = () => {
    return (
        <HomeContainer>
            <Banner />
            <CardContainer>
                {lodgementsList.map((lodgement) => (
                    <Card />
                ))}
            </CardContainer>
        </HomeContainer>
    );
};

export default Home;
