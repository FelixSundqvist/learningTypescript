import React from 'react'
import styled, { withTheme } from 'styled-components';
import Navigation from '../../Navigation/Navigation';

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
        
        padding: 16px;
        background-color: ${colors}
    `
    


    return(
        <Badge></Badge>
    )
}  

export default badge;