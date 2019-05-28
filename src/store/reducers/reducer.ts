
import * as actionTypes from '../actions/actionTypes';


const initialState:any = {
    games: {}
}

const reducer = (state = initialState, action: any) => {
    switch(action.type) {
        case actionTypes.ADD_GAMES:
            return {
                ...state,
                ...state.games,
                games: action.games
            }
        default: return state;
    }
    
}

export default reducer;