import React from 'react';
import styled, { withTheme } from 'styled-components';
import NavArrow from '../../UI/NavIcons/NavArrow';
import SearchBar from '../../UI/SearchBar/SearchBar';

interface NavProps{
    listItems? : Array<any>
    theme?: {[key: string]: any;},
    toggleMenu?: any,
    showMenu?: boolean,
    menu?: boolean,
    style?: {[key: string]: any;},
} 
const navigation: React.FC<NavProps> = (props) => {

    const Nav = styled.nav`
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        ul {
            margin: 0;
            padding: 0;
            flex: 1;
            display: flex;
            flex-direction: ${props.menu ? "row" : "column"};
            text-align: ${props.menu ? "center" : "left"};
            list-style-type: none;
            li{
                z-index: 9999;
                height: ${props.menu ? "100%" : "3rem"};
                padding: ${props.menu ? "1vw" : "1rem"};;
                font-size: .7em;
                padding: .7em;
                color: ${props => props.theme.white};
                /* border-right: .2rem solid ${props => props.theme.black}; */
                transition: background-color 300ms ease;

                &:hover{
                    ${props.showMenu && props.theme 
                        ? "cursor: pointer; background-color:"+props.theme.mainAccent
                        : null}
                    ${!props.menu && props.theme  
                        ? "cursor: pointer; background-color:"+props.theme.mainAccent
                        : null }
                }
            }
        }
    `;
    const NavBackground = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${props => props.theme.black};
    `

    const NavIconWrapper = styled.div`
        flex: 1;
        padding: 1vh;
        z-index: 9999;
    `
    let navigationType  = null;

    if(props.menu){
        navigationType = <>
            <NavIconWrapper>
                <NavArrow toggleMenu = {props.toggleMenu} />
            </NavIconWrapper>
        </>
    }

        return (
            <Nav  > 
                <ul>
                    <li>Playstation 4</li>
                    <li>Xbox One</li>
                    <li>PC</li>
                    <li>Nintendo</li>
                    {props.menu ? <li><b>CART</b></li> : null}
                </ul>
                
                {navigationType}
                
                <NavBackground style={props.style} />
            </Nav>)
    
}

export default withTheme(navigation);