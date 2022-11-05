import styled from 'styled-components';

const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 28%;
    height: 250px;
    margin: 3% 1.75% 0;
    border-radius: 10px;
    background: #ff6060;
`;

const Card = ({ title, cover }) => {
    return <CardWrapper></CardWrapper>;
};

export default Card;
