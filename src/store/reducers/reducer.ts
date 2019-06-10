
import * as actionTypes from '../actions/actionTypes';
const initialState:any = {
    games: {},
    filteredGames: {},
    cart: [],
    showAddedToCart: false,
    showFiltered: false
}

const changeObject = (oldState: any, newObject: any) => ({
    ...oldState,
    ...newObject
})

const addToCart = (state:any, action:any) => {
    let newCart = [...state.cart];
    newCart.push(action.cart)

    if(newCart.length > 1 ){
        for(let current in newCart){
            for(let i = +current + 1; i < newCart.length; i++){
                if(newCart[+current].title === action.cart.title 
                    && newCart[+current].console === action.cart.console){
                    newCart.splice(+current, 1)
                    newCart[current].amount += 1;
                }
            }
        }
    }
    return {
        ...state,
        cart: newCart,
    }
}

const categorizeGames = (state: any, action: any) => {
    const category = action.category.toUpperCase();
    let obj:any = {};

    Object.keys(state.games).filter(current =>
        
        state.games[current].consoles.includes(category)

    ).map(cur => obj[cur] = {...state.games[cur]});

   return {
       ...state,
        filteredGames: {...obj},
        showFiltered: true
   }
}
const reducer = (state = initialState, action: any) => {
    switch(action.type) {

        case actionTypes.ADD_GAMES:
            return {
                ...state,
                showFiltered: false,
                games: {
                    ...state.games,
                    ...action.games
                }
            }
        case actionTypes.SHOW_ADDED_TO_CART:
            return {
                ...state,
                showAddedToCart: true
                }
        case actionTypes.REMOVE_ADDED_TO_CART:
            return changeObject(state, { showAddedToCart: false })
        case actionTypes.ADD_TO_CART:
            return addToCart(state, action)
        case actionTypes.CATEGORIZE_GAMES:
            return categorizeGames(state, action)
        default: return state;
    }
    
}

export default reducer;