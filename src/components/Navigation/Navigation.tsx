import React from 'react';
import styled, { withTheme } from 'styled-components';
import NavArrow from '../UI/NavIcons/NavArrow';
import SearchBar from './SearchBar/SearchBar';

interface NavProps{
    listItems? : Array<any>
    theme?: {[key: string]: any;},
    toggleHeader?: any,
    showHeader?: boolean,
    header?: boolean,
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
            flex-direction: ${props.header ? "row" : "column"};
            text-align: ${props.header ? "center" : "left"};
            list-style-type: none;
            li{
                z-index: 99999;
                height: ${props.header ? "100%" : "3rem"};
                padding: ${props.header ? "1vw" : "1rem"};;
                font-size: 2vh;
                color: ${props => props.theme.white};
                /* border-right: .2rem solid ${props => props.theme.black}; */
                transition: background-color 300ms ease;

                &:hover{
                    ${props.showHeader && props.theme 
                        ? "cursor: pointer; background-color:"+props.theme.mainAccent
                        : null}
                    ${!props.header && props.theme  
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

    if(props.header){
        navigationType = <>
            <NavIconWrapper>
                <NavArrow toggleHeader = {props.toggleHeader} />
                <SearchBar />
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
                    {props.header ? <li><b>CART</b></li> : null}
                </ul>
                
                {navigationType}
                
                <NavBackground style={props.style} />
            </Nav>)
    
}

export default withTheme(navigation);