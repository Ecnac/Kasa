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
    width: 210px;
    height: 68px;
    margin-left: 5%;

    @media (max-width: 768px) {
        width: 145px;
        height: 47px;
`;

const Logo = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 210px;
    height: 68px;
    margin-left: 5%;

    @media (max-width: 768px) {
        width: 145px;
        height: 47px;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 5%;
`;

const ListWrapper = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 0;
`;

const ListItem = styled.li`
    list-style: none;
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

    @media (max-width: 768px) {
        font-size: 12px;
        word-wrap: no-wrap;
        margin: 0 0 0 20px;
`;

const Header = () => (
    <HeaderContainer>
        <LogoContainer>
            <Logo src={logo} alt="logo" />
        </LogoContainer>
        <Nav>
            <ListWrapper>
                <ListItem>
                    <StyledLink to="/">Accueil</StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink to="/a-propos">À Propos</StyledLink>
                </ListItem>
            </ListWrapper>
        </Nav>
    </HeaderContainer>
);

export default Header;
