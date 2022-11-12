import { useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/Style/color';
import arrow from '../../assets/arrow.png';

const CollapseContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ToggleButton = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 47px;
    margin-top: 40px;
    padding-left: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${colors.primary};
    font-size: 24px;
    color: ${colors.secondary};
    z-index: 1;
`;

const TextContainer = styled.div`
    position: relative;
    top: -5px;
    width: 80%;
    border-radius: 0 0 5px 5px;
    background-color: ${colors.background};
    z-index: 0;
`;

const Text = styled.p`
font-size: 24px;
margin-left: 10px;
color: ${colors.primary};}`;

const Collapse = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [rotateChevron, setRotateChevron] = useState(false);

    return (
        <CollapseContainer>
            <ToggleButton
                onClick={() => [
                    setIsOpen(!isOpen),
                    setRotateChevron(!rotateChevron),
                ]}
            >
                {props.label}
                <img
                    src={arrow}
                    alt="arrow"
                    style={{
                        transform: rotateChevron
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
        </CollapseContainer>
    );
};

export default Collapse;
