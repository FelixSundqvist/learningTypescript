import React from 'react';
import styled, { withTheme } from 'styled-components';
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
        ul {
            margin: 0;
            padding: 0;
            flex: 1;
            display: flex;
            flex-direction: ${props.menu ? "column" : "row"};
            text-align: ${props.menu ? "left" : "center"};
            list-style-type: none;
            li{
                z-index: 9999;
                height: ${props.menu ? "100%" : "3rem"};
                padding: ${props.menu ? "1em" : "2em"};;
                font-size: ${props.menu ? "1.2em" : ".7em"};
                padding: ${props.menu ? "1.2em" : ".7em"};
                flex: 1;
                color: ${props.menu && props.theme ? "white" : "black"};
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


        return (
            <Nav  > 
                <ul>
                    <li>Playstation 4</li>
                    <li>Xbox One</li>
                    <li>PC</li>
                    <li>Nintendo</li>
                    {props.menu ? <li><b>CART</b></li> : null}
                </ul>
            </Nav>)
    
}

export default withTheme(navigation);