import * as actionTypes from './actionTypes'; 

export const getGames = (games:any) => (dispatch: any) => dispatch(addGames(games))

const addGames = (games:any) => {
    return {
        type: actionTypes.ADD_GAMES,
        games: games,
    }
}

export const addToCart = (item:any) => {
    return {
        type: actionTypes.ADD_TO_CART,
        cart: item
    }
}

export const showAdded = () => (dispatch: any) => {
    dispatch(show());
    setTimeout( () => dispatch(remove()), 1000);
}

const show = () => {
    return {
        type: actionTypes.SHOW_ADDED_TO_CART
    }
}

const remove = () => {      
    return {
        type: actionTypes.REMOVE_ADDED_TO_CART
    }
}

    /*     useEffect(() =>
    {
        axios.get("/Games.json")
        .then(res => {
            props.addGamesToState(res.data)
        })
        .catch(error => console.log(error))

        return () => {
        props.addGamesToState({})
        }
    }, [])  */