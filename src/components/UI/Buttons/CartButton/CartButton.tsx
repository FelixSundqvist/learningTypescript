import React from 'react'
import styled, {withTheme} from 'styled-components';

interface CartInterface{
    onClick?: any,
    theme?: any
}
const cartButton: React.FC<CartInterface> = props => {
    const Cart = styled.div`
        border: .5vh solid black;
        width: 50%;
        margin: 1vh auto;
        background-color: ${props.theme ? props.theme.buttonGreen: "white"}
        &:hover{
            cursor: pointer;
            transform: scale(1.01)
        }
    `
    return(
    <Cart onClick={props.onClick}> 
        <h4>Add To Cart</h4>
    </Cart>
    )
}

export default withTheme(cartButton);