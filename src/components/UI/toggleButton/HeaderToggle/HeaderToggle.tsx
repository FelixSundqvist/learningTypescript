import React from 'react';
import styled, { withTheme } from 'styled-components';


interface iconProps extends React.Props<any>{
    animationDelay?: Boolean,
    toggleHeader: Function,
    theme: Object,
}

const headerToggle: React.FC<iconProps> = (props:any) => {
    const theme = props.theme; 
    const HeaderIcon = styled.div`
        position: fixed;
        z-index: 999;
        top: 0;
        right: 0;
        margin: 2vw;
        padding: 2vh;
        border: .5vh solid ${props => props.theme.white};
        border-radius: 50%;
        display: ${props.animationDelay ? "none" : "block"};
        &:hover {
            cursor: pointer;
            box-shadow: .1rem 0 2rem ${props => props.theme.white};
        }

        span {
            position: absolute;
            display: block;
            height: 100%;
            width: 100%;
            color: ${props => props.theme.white};
            font-size: 1vh;

            padding-top: 1vh;
            top: -50%;
            left: -50%;
            transform: translate(50%, 50%)
        }
        
    `

    return <HeaderIcon onClick = {props.toggleHeader}> 
    <span>
        Menu
    </span> </HeaderIcon>
}

export default withTheme(headerToggle);