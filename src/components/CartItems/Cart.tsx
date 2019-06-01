import React from 'react';
import styled, { withTheme } from 'styled-components';

import { cartAnimation } from '../../assets/animations';


interface CartInterface {
    theme?: any,
    toggleCart: {
        [key:string] : any
    },
    cart?: Array<any>
}
const cart:React.FC<CartInterface> = props => {
    const Cart = styled.div`
    height: 50vh;
    width: 100%;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%);
    background-color: white;
    overflow: hidden;
    z-index: 9999;
    
    border: .4vh solid ${props => props.theme.mainColor};
    animation: ${props.toggleCart.show ? "expand 300ms forwards" : "shrink 400ms" };
    display: ${props.toggleCart.delay ? "block" : "none"};
    ${ cartAnimation }

    ul{
        list-style-type: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        li{
            position: relative;
            flex: 1;
            padding: 16px;
            &:nth-child(even){
                background-color: #ccc;
            }
        }
    }
    `
    const Form = styled.form`
        position: absolute;
        padding: 16px;
        top: 0;
        right: 0;
        height: 100%;
        transform: translate(-50%);
    `

    const cartList = props.cart ?  props.cart.map((current:any) => {
    return <li>{current.title}, {current.console}
         <Form>
            <label>amount: </label>
            <input type="number" value={current.amount} />
         </Form>
    </li>}) 
    :<p>"No Items Currently here"</p>; 

    return(
        <Cart>
            <h2>In Cart: </h2>
            <ul>
                {cartList}
            </ul>
        </Cart>
    )
}

export default withTheme(cart);