import React from 'react'
import styled from 'styled-components';

interface BadgeInterface {
    theme?: any,
    text: string
}
const badge:React.FC<BadgeInterface> = props =>{
    let colors = ""
    switch(props.text) {
        case "PS4":
            colors = "blue"
            break;
        case "XBOX ONE":
            colors = "green"
            break;
        case "NS":
            colors = "red"
            break;
        case "PC":
            colors = "gray"
            break;
        default :
            colors = "gray";
    }



    const Badge = styled.span`
        color: white;
        width: 16px;
        padding: .2rem;
        background-color: ${colors};
        margin: 2px;
        border-radius: 2rem;
        font-size: .5rem;
    `
    
    let text = props.text;
    if(text === "XBOX ONE"){
        text = "XBOX";
    }
    return(
        <Badge>{text}</Badge>
    )
}  

export default badge;