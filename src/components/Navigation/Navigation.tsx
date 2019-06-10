import React from 'react';
import styled, { withTheme } from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions';
interface NavProps{
    listItems? : Array<any>
    theme?: {[key: string]: any;},
    toggleMenu?: any,
    showMenu?: boolean,
    menu?: boolean,
    style?: {[key: string]: any;},
    categorizeGamesinState: any,
    gamesFromState: any,
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

    
        const categorize = (category: string) => props.categorizeGamesinState(props.gamesFromState, category)
        
        return (
            <Nav> 
                <ul>
                    {["PS4", "Xbox One", "PC", "Switch"].map(
                        current => <li key={current} 
                        onClick={() => categorize(current)}>{current}
                        </li>)}
                </ul>
            </Nav>)
    
}


const mapStateToProps = (state: any) => {
    return {
        gamesFromState: state.games,
    }
};
const mapDispatchToProps = (dispatch:Function, ownProps:any) => {
    return {
       categorizeGamesinState: (allGames:any, category: string) => dispatch(actions.categorizeGames(allGames, category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(navigation));