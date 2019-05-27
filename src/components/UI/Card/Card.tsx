import React from 'react'
import styled, { withTheme } from 'styled-components';
import { Link } from 'react-router-dom';
export interface CardInterface {
    theme?: Object,
    title: string,
    body: string,
    price: string,
    image?: string,
    width?: string,
    height?: string,
    link: string,
}
const card:React.FC<CardInterface> = props => {
    const Card = styled.div`
        position: relative;
        width: ${props.width ? props.width : "200px"};
        height: ${props.height ? props.height : "300px"};
        box-shadow: .5em .2em 1em #ccc;
        margin: 2rem;
        &:hover{
            cursor: pointer;
            transform: scale(1.01)
        }
        .link{
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            display: block;
        }
    `
    const ImageDiv = styled.div`
        padding: 1em;
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
    `
    return (
        <Card>
            <Link to={props.link} className="link" />
            <ImageDiv>
                <img src={props.image ? props.image : ""} alt={props.title}/>
            </ImageDiv>
            <TextDiv>
                <h4>{props.title}</h4>
                <b>{props.price}€</b>
            </TextDiv>
        </Card>
    )
}

export default withTheme(card);
