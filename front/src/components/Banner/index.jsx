import banner from '../../assets/banner.png';
import styled from 'styled-components';

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

const Banner = () => {
    return (
        <BannerContainer>
            <BannerImg src={banner} alt="banner" />
        </BannerContainer>
    );
};

export default Banner;
