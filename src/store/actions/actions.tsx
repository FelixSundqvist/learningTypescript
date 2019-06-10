import * as actionTypes from './actionTypes'; 

export const getGames = (games:any) => (dispatch: any) => dispatch(addGames(games))

const addGames = (games:any) => (dispatch: any) =>  dispatch(addGamesToState(games))

/*  axios.get("/Games.json")
    .then((res:any) => dispatch(addGamesToState(res.data)))
    .catch((error:any)=> console.log(error)) */

const addGamesToState = (games: any) => ({
    type: actionTypes.ADD_GAMES,
    games: games,
})

export const categorizeGames = (games: any, category: string) => ({
    type: actionTypes.CATEGORIZE_GAMES,
    games: games,
    category: category
})

export const addToCart = (item:any) => ({type: actionTypes.ADD_TO_CART, cart: item})
export const cartChange = () => ({type: actionTypes.CHANGE_AMOUNT})

export const showAdded = () => (dispatch: any) => {
    dispatch(show());
    setTimeout( () => dispatch(remove()), 1000);
}
const show = () => ({type: actionTypes.SHOW_ADDED_TO_CART})
const remove = () => ({type: actionTypes.REMOVE_ADDED_TO_CART})