/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import styled, { withTheme } from 'styled-components';

interface BlockProps {
    theme?: Object,
    images?: Array<any>,
    backgroundColor?: String | undefined,
    style?: any,
    current?: boolean
}

const slide: React.FC<BlockProps> = (props) => {
    const SlideBlock = styled.div`
        flex: 1;
        font-size: 1.5rem;
        background-size: cover;
        background-repeat: none;
        h1{
            color: white;
            height: 40%;
            background-color: rgba( 0, 0, 0, 0.4);
        }
    `
    return <SlideBlock style={{...props.style, backgroundColor: props.backgroundColor}}>{props.children}</SlideBlock>
}

export default withTheme(slide);