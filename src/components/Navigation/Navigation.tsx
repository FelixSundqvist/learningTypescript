import React from 'react';
import styled, { withTheme } from 'styled-components';
import NavArrow from '../UI/NavIcons/NavArrow';
import SearchBar from './SearchBar/SearchBar';

interface NavProps{
    listItems? : Array<any>
    theme?: {[key: string]: any;},
    toggleHeader: Function,
    showHeader?: boolean
} 
const navigation: React.FC<NavProps> = (props) => {

    const Nav = styled.nav`
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        ul {
            margin: 0 2vw;
            padding: 0;
            flex: 1;
            display: flex;
            list-style-type: none;
            li{
                z-index: 999;
                height: 100%;
                padding: 1vw;
                font-size: 2vh;
                color: ${props => props.theme.white};
                border-right: .2rem solid ${props => props.theme.black};
                transition: background-color 300ms ease;

                &:hover{
                    ${props.showHeader && props.theme 
                        ? "cursor: pointer; background-color:"+props.theme.mainAccent
                        : null}
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

        return (
            <Nav> 
                <ul>
                    <li>Menu</li>
                    <li>Contact</li>
                    <li>Open</li>
                </ul>
                <NavIconWrapper>
                    <NavArrow 
                        toggleHeader = {props.toggleHeader} />
                    <SearchBar />
                </NavIconWrapper>
                <NavBackground />
            </Nav>)
    
}

export default withTheme(navigation);