import logo from '../../assets/logo.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    height: 68px;
    justify-content: space-between;
    padding: 40px 100px 0 100px;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const ListWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 0;
`;

const StyledLink = styled(Link)`
    margin: 0 30px;
    font-size: 24px;
    font-weight: 500;
    color: #ff6060;
    cursor: pointer;
    list-style: none;
    &:hover {
        text-decoration: underline;
    }
`;

const Header = () => (
    <HeaderContainer>
        <Link to="/">
            <img src={logo} alt="logo" />{' '}
        </Link>
        <Nav>
            <ListWrapper>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/About">À Propos</StyledLink>
            </ListWrapper>
        </Nav>
    </HeaderContainer>
);

export default Header;
