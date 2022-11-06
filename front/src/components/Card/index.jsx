import styled from 'styled-components';
import colors from '../../utils/Style/color';

const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 340px;
    height: 340px;
    margin: 0 30px 50px;
    border-radius: 10px;
    background: ${colors.primary};
`;
const Card = ({ title, cover }) => {
    return <CardWrapper></CardWrapper>;
};

export default Card;
