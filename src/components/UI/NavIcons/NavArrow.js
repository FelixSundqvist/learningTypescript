import React from 'react';
import styled, { withTheme } from 'styled-components';
import icon from '../../../assets/icons/arrow-right-solid.svg';

const navArrow = props => {
    const theme = props.theme; 
    const NavArrow  = styled.div`
        float: right;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: ${theme.margin};
        &:hover{
            cursor: pointer;
        }
        img{
            height: 50%;
            width: auto;
            color: ${theme.white};
        }
    `

    return <NavArrow onClick = {props.toggleHeader}   >
        {props.icon ? props.icon : <img src={icon} alt ="arrow" />}
     </NavArrow>
}

export default withTheme(navArrow);