import React from 'react';
import styled, { withTheme } from 'styled-components';

interface iconProps {
    animationDelay?: boolean,
    toggleCart: Function,
    theme: Object,
}

const cartToggle: React.FC<iconProps> = (props:any) => {
    const CartIcon = styled.div`
        position: relative;
        padding: 3vh;
        border-radius: 50%;
        height: 3vh;
        width: 3vh;
        background-color: ${props => props.theme.black};
        float: right;
        margin: 0 auto;
        opacity: 0.5;
        z-index: 999;
        display: ${props.animationDelay ? "none" : "block"};
        transition: opacity 200ms ease;
        &:hover {
            cursor: pointer;   
            opacity: 1;
        }
    `

    const Wrapper = styled.div`
        position: fixed;
        height: 70%;
        width: 30%;
        z-index: 999;
        top: 0;
        right: 3vw;
        margin: .5vw;

    `
    const Block = styled.div`
        position: relative;
        width: 100%;
        height: 100%;
    `

    return <Wrapper> 
            <CartIcon onClick = {props.toggleCart}/>
                <Block>
                    {props.children}
                </Block>
            </Wrapper>


}

export default withTheme(cartToggle);