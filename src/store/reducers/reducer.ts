
import * as actionTypes from '../actions/actionTypes';


const initialState:any = {
    games: {},
    cart: [],
    showAddedToCart: false
}
const addToCart = (state:any, action:any) => {

    let newCart = [...state.cart];
    newCart.push(action.cart)

    if(newCart.length > 1 ){
        for(let current in newCart){
            for(let i = +current + 1; i < newCart.length; i++){
                
                if(newCart[+current].title === action.cart.title 
                    && newCart[+current].console === action.cart.console){

                    newCart.splice(+current, 1)
                    newCart[current].amount += 1;}
            }
        }
    }
    return {
        ...state,
        cart: newCart,
    }
}

const reducer = (state = initialState, action: any) => {
    switch(action.type) {

        case actionTypes.ADD_GAMES:
            return {
                ...state,
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
            return {
                ...state,
                showAddedToCart: false
            }
        case actionTypes.ADD_TO_CART:
            return addToCart(state, action)
        default: return state;
    }
    
}

export default reducer;