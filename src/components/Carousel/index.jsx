import { useState, useEffect } from 'react';
import styled from 'styled-components';
import colors from '../../utils/Style/color';
import leftArrow from '../../assets/left-arrow.png';
import rightArrow from '../../assets/right-arrow.png';

const CarouselContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-top: 20px;
    overflow: hidden;
`;

const CarouselImage = styled.img`
    width: 90%;
    height: 415px;
    border-radius: 25px;
    object-fit: cover;

    @media (max-width: 768px) {
        height: 255px;

`;

const LeftButton = styled.button`
    position: absolute;
    left: 5%;
    top: 40%;
    border: none;
    cursor: pointer;
    background-color: transparent;

    @media (max-width: 768px) {
        left: 1%;
`;

const RightButton = styled.button`
    position: absolute;
    right: 5%;
    top: 40%;
    border: none;
    cursor: pointer;
    background-color: transparent;

    @media (max-width: 768px) {
        right: 1%;
`;

const PreviousArrow = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;

    @media (max-width: 768px) {
        width: 50%;
        height: 50%;
`;

const NextArrow = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;

    @media (max-width: 768px) {
        width: 50%;
        height: 50%;
`;

const SlideNumber = styled.p`
    position: absolute;
    bottom: 0;
    font-size: 18px;
    color: ${colors.secondary};
`;

const Carousel = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        images === undefined ? setIsLoaded(false) : setIsLoaded(true);
    }, [images]);

    if (!isLoaded) {
        return;
    }

    const length = images.length;

    const nextImage = () => {
        // Si on est à la dernière image, on revient à la première
        setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
    };

    const prevImage = () => {
        // Si on est à la première image, on revient à la dernière
        setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
    };

    return (
        <CarouselContainer>
            <LeftButton onClick={prevImage}>
                <PreviousArrow src={leftArrow} alt="left-arrow" />
            </LeftButton>
            <CarouselImage src={images[currentImage]} alt="carousel" />
            <SlideNumber>
                {currentImage + 1}/{length}
            </SlideNumber>
            <RightButton onClick={nextImage}>
                <NextArrow src={rightArrow} alt="right-arrow" />
            </RightButton>
        </CarouselContainer>
    );
};

export default Carousel;
