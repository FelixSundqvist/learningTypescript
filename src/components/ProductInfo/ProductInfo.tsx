import React from 'react';
import styled from 'styled-components';
import Backdrop from '../UI/Backdrop/Backdrop';
import {  withRouter, RouteComponentProps } from 'react-router-dom';

interface ProductInterface extends RouteComponentProps{
    title: string,
    body: string,
    [key: string]: any
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

    `
    const ImageDiv = styled.div`
        padding: 1vh;
        height: 60%;
        width: 100%;
        img{
            height: 100%;
            width: auto;
        }
    `
    const TextDiv = styled.div`
        height: 40%;
        width: 100%;
        padding: 2vw;

        p{
            text-align: left;
        }
    `
    const backdropClick = () => {
        props.history.push("/");
    }

    return (
        <>
            <Backdrop show={true} onClick={backdropClick} />
            <ProductInfo>
                <ImageDiv>
                    <img src={props.image ? props.image : ""} alt={props.title}/>
                </ImageDiv>
                <TextDiv>
                    <h2>{props.title}</h2>
                    <p>{props.body}</p>
                </TextDiv>
            </ProductInfo>
        </>
    )
}

export default withRouter(productInfo);
