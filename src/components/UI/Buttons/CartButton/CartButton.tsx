import React from 'react'
import styled, {withTheme} from 'styled-components';

interface CartInterface{
    onClick?: any,
    theme?: any
}
const cartButton: React.FC<CartInterface> = props => {
    const Cart = styled.div`
        border: .3vh solid black;
        width: 50%;
        margin: 1vh auto;
        z-index: 999;
        text-align:center;
        background-color: ${props.theme ? props.theme.buttonGreen: "white"}
        &:hover{
            cursor: pointer;
            background-color: white;
        }
    `
    return(
    <Cart onClick={props.onClick}> 
        <p>Add To Cart</p>
    </Cart>
    )
}

export default withTheme(cartButton);