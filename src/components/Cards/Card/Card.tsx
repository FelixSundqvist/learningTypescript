/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import styled, { withTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import Badge from '../../UI/Badge/Badge';
import ProductOptions from '../../UI/ProductOptions/ProductOptions';
import withSelectedConsole from '../../../hoc/withSelectedConsole';
export interface CardInterface{
    theme?: {[key:string]: any},
    title: string,
    body: string,
    price: string,
    link?: string,
    image?: string,
    width?: string,
    height?: string,
    consoles: Array<string>,
    selectedConsole: "string",
    changeConsole: Function
}
const card:React.FC<CardInterface> = props => {
    const Card = styled.div`
        position: relative;
        width: ${props.width ? props.width : "400px"};
        height: ${props.height ? props.height : "650px"};
        box-shadow: .5em .2em 1em #ccc;
        background-color: ${props => props.theme ? props.theme.secondaryColor : null};
        margin: 2rem;
        
        &:hover{
            cursor: pointer;
            transform: scale(1.01)
        }

        @media (max-width: 922px){
            flex: 1;
            margin: 2vw;
        }
    `
    const ImageDiv = styled.div`
        padding: 1em;
        height: 60%;
        width: 100%;
        .link{
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            display: block;
        }
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
            font-size: 1em;
        }
        b{
            font-size: .8em;
        }
    `
    //badges for each consoles listed
    const badges = props.consoles 
    ? props.consoles.map(current => <Badge key={current} text={current} />)
    : null;

  
    return (
        <Card>
            <ImageDiv>
            <Link to={""+props.link+"/console="+props.selectedConsole} className="link" />
                <img src={props.image ? props.image : ""} alt={props.title}/>
            </ImageDiv>
            <TextDiv>
                {badges}
                <h4>{props.title}</h4>
                <b>{props.price}€</b>
                <ProductOptions 
                    title={props.title}
                    onChange={(event:any) => props.changeConsole(event)}
                    options={props.consoles} 
                    value={props.selectedConsole} />
            </TextDiv>
            
        </Card>
        
    )
}

export default withTheme(withSelectedConsole( card ));
