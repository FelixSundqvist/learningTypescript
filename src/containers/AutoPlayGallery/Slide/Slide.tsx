/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import styled, { withTheme } from 'styled-components';
import { galleryAnimation } from '../../../assets/animations';
import SlideBlock from '../SlideBlock/SlideBlock';
import shortid from 'shortid';

interface SlideProps {
    theme?: Object,
    current?: boolean,
    slideTime?: number,
    blockDirection?: string
} 

const slide: React.FC<SlideProps> = (props) => {
    const transitionTime = props.slideTime || 600;
    const Slide = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: ${props.blockDirection};
    background-color: ${props => props.theme.mainColor};
    ${galleryAnimation}
    ${props.current 
        ? `animation: moveLeft ${transitionTime}ms linear forwards; z-index: 99;`
        : `animation: moveBack ${transitionTime}ms linear forwards;`
    }
    `
    return <Slide>{props.children}</Slide>
}

interface itemInterface{        
    backgroundColor?: Array<String>,
    backgroundImage?: Array<String>,
    content: Array<any>
}

export const createSlideBlocks = (item: itemInterface) => {
    return item.content.map((current, index) => {
        
        const bgImage = (item.backgroundImage ? `url(${item.backgroundImage[index]})` : "");
        const bgColor = (item.backgroundColor ? item.backgroundColor[index] : "");

        return (<SlideBlock
            key={shortid()} 
            backgroundColor={bgColor} 
            style = {{backgroundImage: bgImage}}>
            {current}
        </SlideBlock>)
    })
}

export default withTheme(slide);