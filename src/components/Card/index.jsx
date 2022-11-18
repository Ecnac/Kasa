import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/Style/color';

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 340px;
    height: 340px;
    margin: 0 30px 50px;
    border-radius: 10px;

    @media (max-width: 768px) {
        width: 100%;
        margin: 0 0 25px;
`;

const CardLink = styled(Link)`
    position: absolute;
    width: 340px;
    height: 340px;
    border-radius: 10px;
    text-decoration: none;

    @media (max-width: 768px) {
        width: 90%;
`;

const CardImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
`;

const TitleWrapper = styled.div`
    position: absolute;
    bottom: 0;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    background-image: ${colors.gradient};
`;

const CardTitle = styled.p`
    position: relative;
    top: 265px;
    font-size: 18px;
    font-weight: 500;
    left: 10px;
    margin-right: 5%;
    color: ${colors.secondary};
`;

const Card = ({ title, cover, id }) => {
    return (
        <CardWrapper>
            <CardLink to={`/logement/${id}`}>
                <CardImage src={cover} alt={title} />
                <TitleWrapper>
                    <CardTitle>{title}</CardTitle>
                </TitleWrapper>
            </CardLink>
        </CardWrapper>
    );
};

export default Card;
