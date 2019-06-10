import React from 'react';
import styled, { withTheme } from 'styled-components';
import cartIcon from '../../../../assets/icons/shopping-cart-white.svg';
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
        margin: .5vw;
        background-color: ${props => props.theme.black};
        opacity: 0.5;
        z-index: 999;
        display: ${props.animationDelay ? "none" : "block"};
        transition: opacity 200ms ease;
        float: right;
        background-image: url(${cartIcon});
        background-size: 50%;
        background-repeat: no-repeat;
        background-position-x: 50%;
        background-position-y: 50%;
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