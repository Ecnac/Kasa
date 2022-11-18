import redStar from '../../assets/red-star.svg';
import greyStar from '../../assets/grey-star.svg';
import styled from 'styled-components';

const StarsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 36px;
    width: 196px;
    align-items: center;

    @media (max-width: 768px) {
        height: 18px;
        width: 98px;
`;

const Star = styled.img`
display: flex;
flex-direction: row;
justify-content: center;
height: 36px;
width: 196px;
align-items: center;

@media (max-width: 768px) {
    height: 18px;
    width: 98px;`;

const Rating = ({ rating }) => {
    const stars = [1, 2, 3, 4, 5];
    return (
        <StarsContainer>
            {stars.map((star) => {
                if (star <= rating) {
                    return <Star key={star} src={redStar} alt="red star" />;
                }
                return <Star key={star} src={greyStar} alt="grey star" />;
            })}
        </StarsContainer>
    );
};

export default Rating;
