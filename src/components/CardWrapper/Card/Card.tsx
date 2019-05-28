import React from 'react'
import styled, { withTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import Badge from '../../UI/Badge/Badge';
import ProductInfo from '../../ProductInfo/ProductInfo'

export interface CardInterface{
    theme?: {[key:string]: any},
    title: string,
    body: string,
    price: string,
    link?: string,
    image?: string,
    width?: string,
    height?: string,
    consoles?: Array<string>
}
const card:React.FC<CardInterface> = props => {

    const Card = styled.div`
        position: relative;
        width: ${props.width ? props.width : "400px"};
        height: ${props.height ? props.height : "600px"};
        box-shadow: .5em .2em 1em #ccc;
        background-color: ${props => props.theme ? props.theme.white : null};
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
        @media all and (max-width: 922px){
            width: 200px;
            height: 350px;
        }
    `
    const ImageDiv = styled.div`
        padding: 1em;
        height: 60%;
        width: 100%;
        
        img{
          margin: auto;
          height: 100%;
          width: auto;
        }
    `
    const TextDiv = styled.div`
        height: 40%;
        width: 100%;
        background-color: ${props.theme ? props.theme.secondaryAccent : "#ccc"};
        h4{
            width: 100%;
            font-size: 1vw;
        }
    `
    //badges for each consoles listed
    const badges = props.consoles 
    ? props.consoles.map(current => <Badge key={current} text={current} />)
    : null;

    return (
        <>
        <Card>
            <Link to={""+props.link} className="link" />
            <ImageDiv>
                <img src={props.image ? props.image : ""} alt={props.title}/>
            </ImageDiv>
            <TextDiv>
                {badges}
                <h4>{props.title}</h4>
                <b>{props.price}€</b>
            </TextDiv>

        </Card>
         
        </>
    )
}

export default withTheme(card);
