import React from 'react';
import styled, { withTheme } from 'styled-components';
import Backdrop from '../UI/Backdrop/Backdrop';
import {  withRouter, RouteComponentProps } from 'react-router-dom';
import Badge from '../UI/Badge/Badge';
import CancelButton from '../UI/Buttons/CancelButton/CancelButton';
import CartButton from '../UI/Buttons/CartButton/CartButton';
interface ProductInterface extends RouteComponentProps {
    theme?: {
        [key:string] : any
    },
    title: string,
    body: string,
    price: string,
    image?: string,
    width?: string,
    height?: string,
    link: string,
    consoles?: Array<string>
}


const productInfo:React.FC<ProductInterface> = props => {
    
    const ProductInfo = styled.div`
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 90vw;
        height: 90vh;
        z-index: 999;
        background-color: white;
        border: 2px solid black;
        margin: 2rem;
        overflow: auto;
        display: flex;
    `
    const ImageDiv = styled.div`
        padding: 1vh;
        height: 60%;
        width: 50%;
        img{
            height: 100%;
            width: auto;
        }
    `

    const TextDiv = styled.div`
        height: 40%;
        width: 100%;
        padding: 0 4vw;
        height: 100%;
        background-color: ${props.theme ? props.theme.secondaryAccent : "#ccf"};
        p{
            text-align: left;
        }
    `
    const backdropClick = () => {
        props.history.push("/");
    }


    const badges = props.consoles 
    ? props.consoles.map(current => <Badge text={current} key={current} />)
    : null;
   
    return (
        <>
            <Backdrop show={true} onClick={backdropClick} />
            <ProductInfo>
                <CancelButton onClick={backdropClick}/>
                <ImageDiv>
                    <img src={props.image ? props.image : ""} alt={props.title}/>
                </ImageDiv>

                <TextDiv>
                    
                    <h2>{props.title}</h2>
                    {badges}
                    <p>{props.body}</p>
                    <CartButton />
                </TextDiv>
            </ProductInfo>
        </>
    )
}

export default withRouter(withTheme(productInfo));
