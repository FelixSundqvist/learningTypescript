import React from 'react';
import styled, { withTheme } from 'styled-components';
import { menuAnimation } from '../../assets/animations';

interface MenuInterface{
    theme?: any,
    toggleMenu: {
        show: boolean,
        delay: boolean
    }
}

const menu:React.FC<MenuInterface> = (props: any) => {
    const Menu = styled.div`
        height: 50vh;
        width: 100%;
        position: fixed;
        top: 0;
        right: -50%;
        transform: translate(50%);
        background-color: black;
        overflow: hidden;
        z-index: 9999;
        border: .4vh solid ${props => props.theme.mainColor};
        animation: ${props.toggleMenu.show ? "expand 300ms forwards" : "shrink 400ms" };
        display: ${props.toggleMenu.delay ? "block" : "none"};
        ${ menuAnimation }
    `

    return(
        <Menu>
            {props.children}
        </Menu>
    )
}

export default withTheme(menu);