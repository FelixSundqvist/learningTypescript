import React from 'react';
import styled, { withTheme } from 'styled-components';
import icon from '../../../assets/icons/arrow-right-solid.svg';

interface navArrow {
    theme?: Object,
    toggleHeader: Function

}

const navArrow: React.FC<navArrow> = (props:any) => {
    const NavArrow  = styled.div`
        float: right;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: ${props => props.theme.margin};
        &:hover{
            cursor: pointer;
        }
        img{
            height: 50%;
            width: auto;
            color: ${props => props.theme.white};
        }
    `

    return <NavArrow onClick = {props.toggleHeader}   >
        <img src={icon} alt ="arrow" />
     </NavArrow>
}

export default withTheme(navArrow);