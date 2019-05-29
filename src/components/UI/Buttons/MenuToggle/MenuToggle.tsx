import React from 'react';
import styled, { withTheme } from 'styled-components';

interface iconProps {
    animationDelay?: boolean,
    toggleMenu: Function,
    theme: Object,
}

const menuToggle: React.FC<iconProps> = (props:any) => {
    const MenuIcon = styled.div`
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
    return <MenuIcon onClick = {props.toggleMenu}> 
        <span />
        <span />
        <span />
        </MenuIcon>
}

export default withTheme(menuToggle);