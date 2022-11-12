import homeBanner from '../../assets/home-banner.png';
import aboutBanner from '../../assets/about-banner.png';
import styled from 'styled-components';
import colors from '../../utils/Style/color';

const BannerContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    margin: 0 auto;
`;

const BannerImg = styled.img`
    width: 90%;
    height: auto;
`;

const BannerText = styled.p`
    position: absolute;
    font-size: 48px;
    font-weight: 500;
    margin: 0 7.5%;
    color: ${colors.secondary};
`;

const Banner = () => {
    // Vérifie le chemin d'accès de la page et affiche la bannière et le texte correspondant
    const banner = window.location.pathname === '/' ? homeBanner : aboutBanner;
    const bannerText =
        window.location.pathname === '/'
            ? 'Chez vous, partout et ailleurs'
            : '';

    return (
        <BannerContainer>
            <BannerImg src={banner} alt="banner" />
            <BannerText>{bannerText}</BannerText>
        </BannerContainer>
    );
};

export default Banner;
