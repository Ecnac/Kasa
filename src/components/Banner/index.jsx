import homeBannerDesktop from '../../assets/home-banner.png';
import homeBannerMobile from '../../assets/home-banner-mobile.png';
import aboutBanner from '../../assets/about-banner.png';
import aboutBannerMobile from '../../assets/about-banner-mobile.png';
import styled from 'styled-components';
import colors from '../../utils/Style/color';

const BannerContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    margin: 0 auto;

    @media (max-width: 768px) {
        padding-top: 0;
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

    @media (max-width: 768px) {
        font-size: 24px;
`;

const Picture = styled.picture`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Banner = () => {
    // Vérifie le chemin d'accès de la page et affiche la bannière et le texte correspondant
    const desktopBanner =
        window.location.pathname === '/' ? homeBannerDesktop : aboutBanner;
    const mobileBanner =
        window.location.pathname === '/' ? homeBannerMobile : aboutBannerMobile;
    const bannerText =
        window.location.pathname === '/'
            ? 'Chez vous, partout et ailleurs'
            : '';

    return (
        <BannerContainer>
            <Picture>
                <source media="(min-width: 769px)" srcSet={desktopBanner} />
                <source media="(max-width: 768px)" srcSet={mobileBanner} />
                <BannerImg src={desktopBanner} alt="Banner" />
            </Picture>
            <BannerText>{bannerText}</BannerText>
        </BannerContainer>
    );
};

export default Banner;
