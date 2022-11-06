import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/Style/color';

const CardWrapper = styled(Link)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 340px;
    height: 340px;
    margin: 0 30px 50px;
    border-radius: 10px;
    text-decoration: none;
    );
`;

const CardImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    background-image: ${colors.gradient};
`;

const CardTitle = styled.p`
    position: relative;
    font-size: 18px;
    weight: 500;
    bottom: 70px;
    left: 10px;
    color: ${colors.secondary};
`;

const Card = ({ title, cover, id }) => {
    return (
        <CardWrapper to={`/lodging/${id}`}>
            <CardImage src={cover} alt={title} />
            <CardTitle>{title}</CardTitle>
        </CardWrapper>
    );
};

export default Card;
