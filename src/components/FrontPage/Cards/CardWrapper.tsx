import React from 'react'
import { connect } from 'react-redux';
import styled, { withTheme } from 'styled-components';
import createCards from '../../../utility/createCards';

interface CardWrapperInterface {
    theme?: Object,
    width?: string,
    height?: string,
    backgroundColor?: string,
    games?: any,
    gamesFromState: any,
    showFiltered: boolean,
    filteredGames: any
}

const CardWrapper:React.FC<CardWrapperInterface> = props => {

    const bgColor:string|null = props.backgroundColor? props.backgroundColor : null;

    const CardContainer = styled.div`

        width: ${props.width ? props.width : "100%"};
        min-height: ${props.height ? props.height : "500px"};
        background-color: ${bgColor};
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        padding: 1.5em;
        
    ` 
    let games = null;
    
    if(props.gamesFromState && !props.showFiltered){
        games = createCards(props.gamesFromState);
    }else if(props.gamesFromState && props.showFiltered){
        games = createCards(props.filteredGames)
    }
    
    return (
        <CardContainer>
            {games}
        </CardContainer>
    )
}
const mapStateToProps = (state:any) => {
    return {
        gamesFromState: state.games,
        showFiltered: state.showFiltered,
        filteredGames: state.filteredGames
    }
}
export default connect(mapStateToProps)(withTheme(CardWrapper));
