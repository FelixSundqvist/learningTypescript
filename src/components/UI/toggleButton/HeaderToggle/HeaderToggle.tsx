import React from 'react';
import styled, { withTheme } from 'styled-components';

interface iconProps {
    animationDelay?: boolean,
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
        margin: .5vw;
        padding: 3vh;
        border-radius: 50%;
        background-color: ${props => props.theme.black};
       
        opacity: 0.5;
        display: ${props.animationDelay ? "none" : "block"};
        transition: opacity 200ms ease;
        &:hover {
            cursor: pointer;   
            opacity: 1;

        }
        span {
            position: absolute;
            display: block;
            height: 10%;
            width: 50%;
            
            background-color:${props => props.theme.white};
            transform: translate(-50%);
            &:nth-child(1){
                top: 30%;
            }
            &:nth-child(2){
                top: 50%;
            }
            &:nth-child(3){
                top: 70%;
            }
        }
    `
    return <HeaderIcon onClick = {props.toggleHeader}> 
        <span />
        <span />
        <span />
        </HeaderIcon>
}

export default withTheme(headerToggle);