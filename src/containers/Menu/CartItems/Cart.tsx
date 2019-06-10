import React from 'react';
import styled, { withTheme } from 'styled-components';
import { cartAnimation } from '../../../assets/animations';
import Button from '../../../components/UI/Buttons/Button';
interface CartInterface {
    theme?: any,
    toggleCart: {
        [key:string] : any
    },
    cart?: Array<any>,
    onChange?: any,
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
        padding: 0;
        display: flex;
        flex-direction: column;
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
            <input type="number" value={current.amount} onChange={props.onChange} />
         </Form>
    </li>}) 
    :<p>"No Items Currently here"</p>; 

    return(
        <Cart>
            <h2>In Cart: </h2>
            <ul>
                {cartList}
            </ul>
            <Button style={
            {
                position: "absolute", 
                bottom: "0",
                backgroundColor: props.theme.mainColor,
                padding: "16px",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }
            }>Go to Checkout</Button>
        </Cart>
    )
}

export default withTheme(cart);