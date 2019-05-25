import React from 'react';
import styled, { withTheme } from 'styled-components';

const button = props => {
    const theme = props.theme;
    const Button = styled.button`
        background-color: transparent;
        outline: none;
        border: .1rem solid ${theme.white};
        border-radius: 2vh;
        color: ${theme.white};
        font-size: 2vh;
        &:hover{
            cursor: pointer;
            background-color: ${theme.white};
            color: ${theme.black};
        }
    `

    return <Button onClick={props.onClick} style={props.style}>{props.children}</Button>
}

export default withTheme(button);