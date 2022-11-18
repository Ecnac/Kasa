import footerLogo from '../../assets/footer-logo.png';
import styled from 'styled-components';
import colors from '../../utils/Style/color';

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 209px;
    margin-top: 40px;
    background: ${colors.footer};
`;

const FooterText = styled.p`
    font-size: 24px;
    font-weight: 500;
    color: ${colors.secondary};
    
    @media (max-width: 768px) {
        font-size: 12px;
    `;

const Footer = () => {
    return (
        <FooterContainer>
            <img src={footerLogo} alt="logo" />
            <FooterText>© 2020 Kasa. All rights reserved</FooterText>
        </FooterContainer>
    );
};

export default Footer;
