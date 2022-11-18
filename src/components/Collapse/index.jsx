import { useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/Style/color';
import arrow from '../../assets/arrow.png';

const CollapseWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin: 0 auto;
`;

const ToggleButton = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 47px;
    margin-top: 40px;
    padding-left: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: ${colors.primary};
    font-size: 24px;
    color: ${colors.secondary};
    z-index: 1;

    @media (max-width: 768px) {
        width: 100%;
        font-size: 13px;
        margin-top: 20px;
`;

const TextContainer = styled.div`
    position: relative;
    top: -5px;
    width: 90%;
    border-radius: 0 0 5px 5px;
    background-color: ${colors.background};

    @media (max-width: 768px) {
        width: 100%;
`;

const Text = styled.p`
font-size: 18px;
margin-left: 10px;
color: ${colors.primary};}

    @media (max-width: 768px) {
        font-size: 12px;
`;

const Collapse = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [rotateArrow, setRotateArrow] = useState(false);

    return (
        <CollapseWrapper>
            <ToggleButton
                onClick={() => [
                    setIsOpen(!isOpen),
                    setRotateArrow(!rotateArrow),
                ]}
            >
                {props.label}
                <img
                    id="arrow"
                    src={arrow}
                    alt="arrow"
                    style={{
                        transform: rotateArrow
                            ? 'rotate(180deg)'
                            : 'rotate(0deg)',
                    }}
                />
            </ToggleButton>

            {isOpen && (
                <TextContainer>
                    <Text>{props.children}</Text>
                </TextContainer>
            )}
        </CollapseWrapper>
    );
};

export default Collapse;
