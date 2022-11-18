import styled from 'styled-components';
import colors from '../../utils/Style/color';

const Tag = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    font-size: 18px;
    background-color: ${colors.primary};
    color: ${colors.secondary};
    margin-right: 20px;
    padding: 0 20px;
    border-radius: 10px;

    @media (max-width: 768px) {
        font-size: 10px;
        margin: 0 10px 10px 0;
`;

const Tags = ({ tags }) => {
    return <Tag>{tags}</Tag>;
};

export default Tags;
