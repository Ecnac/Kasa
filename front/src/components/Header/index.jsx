import logo from '../../assets/logo.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../utils/Style/color';

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 68px;
    padding: 40px 0 0 0;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5%;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 5%;
`;

const ListWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 0;
`;

const StyledLink = styled(Link)`
    margin: 0 0 0 57px;
    font-size: 24px;
    font-weight: 500;
    color: ${colors.primary};
    cursor: pointer;
    text-decoration: none;
    list-style: none;
    &:hover {
        text-decoration: underline;
    }
`;

const Header = () => (
    <HeaderContainer>
        <LogoContainer>
            <img src={logo} alt="logo" />
        </LogoContainer>
        <Nav>
            <ListWrapper>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/a-propos">À Propos</StyledLink>
            </ListWrapper>
        </Nav>
    </HeaderContainer>
);

export default Header;
