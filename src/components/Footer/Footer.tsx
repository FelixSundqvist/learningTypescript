/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import styled, { withTheme } from 'styled-components';

interface footerProps{
    theme?: Object
    /* dynamic keys = [key: string]: any; */
}

const footer: React.FC<footerProps> = (props) => {

    const Footer = styled.footer`
        height: 20vh;
        width: 100%;
        background-color: ${props => props.theme.secondaryColor};
        color: ${props => props.theme.white}
    `


    return(
        <Footer>
            &copy; Felix Sundqvist
        </Footer>
    )   
}

export default withTheme(footer);