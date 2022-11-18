import styled from 'styled-components';
import colors from '../../utils/Style/color';
import { Link } from 'react-router-dom';

const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ErrorTitle = styled.h1`
    font-size: 288px;
    margin: 80px 0 0;
    color: ${colors.primary};
`;

const ErrorSubtitle = styled.h2`
    font-size: 36px;
    font-weight: 500;
    color: ${colors.primary};
`;

const ErrorLink = styled(Link)`
    color: ${colors.primary};
    font-size: 18px;
    margin-top: 120px;
`;

const Error = () => {
    return (
        <ErrorContainer>
            <ErrorTitle>404</ErrorTitle>
            <ErrorSubtitle>
                Oups! La page que vous demandez n'existe pas.
            </ErrorSubtitle>
            <ErrorLink to="/">Retourner sur la page d'accueil</ErrorLink>
        </ErrorContainer>
    );
};

export default Error;
