import logo from '../../assets/logo.png';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import colors from '../../utils/Style/color';

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 68px;
    padding: 40px 0 0 0;

    @media (max-width: 768px) {
        padding: 20px 0 0 0;
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

    @media (max-width: 768px) {
        text-transform: uppercase;
`;

const StyledLink = styled(NavLink)`
    margin: 0 0 0 57px;
    font-size: 24px;
    font-weight: 500;
    color: ${colors.primary};
    cursor: pointer;
    text-decoration: none;
    list-style: none;

    &.active {
        text-decoration: underline;        
    }

    @media (max-width: 768px) {
        font-size: 12px;
        margin: 0 0 0 10px;

        &.active {
            text-decoration: underline;
            font-size: 12px;
            margin: 0 0 0 10px;

        
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
                    <StyledLink to="/a-propos">?? Propos</StyledLink>
                </ListItem>
            </ListWrapper>
        </Nav>
    </HeaderContainer>
);

export default Header;
