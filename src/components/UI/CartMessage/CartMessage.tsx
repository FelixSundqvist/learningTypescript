import React from 'react'
import styled from 'styled-components'
interface CartInterface {
    show?: boolean
}   

const cartMessage: React.FC<CartInterface> = props => {
    
    const CartMessage = styled.div `
        position: fixed;
        bottom: 0;
        right: 0;
        background-color: black;
        opacity: 0.8;
        padding: 16px;
        margin: 16px;
        display: ${props.show ? "block" : "none"};
        z-index: 9999;
        color: white;
    `

    return(
        <CartMessage><h2>Added to Cart</h2></CartMessage>
    )
}

export default cartMessage;