import React from 'react'
import styled, {withTheme} from 'styled-components';
import cartIcon from '../../../../assets/icons/shopping-cart-solid.svg'
interface CartInterface{
    onClick?: any,
    theme?: any,
    big?: boolean | undefined
}
const cartButton: React.FC<CartInterface> = props => {
    const CartBig = styled.div`
        border: .3vh solid black;
        width: 50%;
        margin: 1vh auto;
        z-index: 99;
        text-align:center;
        background-color: ${props.theme ? props.theme.buttonGreen: "white"}
        &:hover{
            cursor: pointer;
            background-color: ${props.theme ? props.theme.mainColor: "white"};
        }
    `
    const CartSmall = styled.div`
        border-radius: 50%;
        width: 5em;
        height: 5em;
        margin: 1em auto;
        z-index: 999;
        text-align:center;
        background-color: ${props.theme ? props.theme.buttonGreen: "white"};
        background-image: url(${cartIcon});
        background-size: 50%;
        background-repeat: no-repeat;
        background-position-x: 50%;
        background-position-y: 50%;
        &:hover{
            cursor: pointer;
            background-color: ${props.theme ? props.theme.mainColor: "white"};
        }
    `
    const cartBtn = props.big ? <CartBig onClick={props.onClick}>Add To Cart</CartBig> 
    : <CartSmall onClick={props.onClick}></CartSmall>
    return(
        <>
            {cartBtn}
        </>
    )
}

export default withTheme(cartButton);