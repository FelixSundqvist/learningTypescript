import * as actionTypes from './actionTypes'; 

export const getGames = (games:any) => {
    
    return{
        type: actionTypes.ADD_GAMES,
        games: games
    }
}