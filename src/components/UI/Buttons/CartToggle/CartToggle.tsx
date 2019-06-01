import React from 'react';
import styled, { withTheme } from 'styled-components';

interface iconProps {
    animationDelay?: boolean,
    toggleCart: Function,
    theme: Object,
    show?: boolean
}

const cartToggle: React.FC<iconProps> = (props:any) => {
    const CartIcon = styled.div`
        position: relative;
        padding: 3vh;
        border-radius: 50%;
        height: 3vh;
        width: 3vh;
        background-color: ${props => props.theme.black};
        opacity: 0.5;
        z-index: 999;
        display: ${props.animationDelay ? "none" : "block"};
        transition: opacity 200ms ease;
        float: right;
        &:hover {
            cursor: pointer;   
            opacity: 1;
        }
    `

    const Wrapper = styled.div`
        z-index: 999;
    `

    return <CartIcon onClick = {props.toggleCart}/>

            


}

export default withTheme(cartToggle);