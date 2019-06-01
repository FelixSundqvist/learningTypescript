/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import styled, { withTheme } from 'styled-components'; 
import { connect } from 'react-redux';
import Gallery from '../AutoPlayGallery/Gallery';
import Products from '../../components/FrontPage/Products';
import { Route } from 'react-router-dom'; 

/* import axios from '../../axios-games'; */
import * as actions from '../../store/actions/actions';
import jsonGames from '../../assets/fakewebpage-b18d3-export.json';
import bgImage from '../../assets/images/mateusz-turbinski-1630732-unsplash.jpg';
import ProductInfo from '../../components/FrontPage/ProductInfo/ProductInfo';
import CartMessage from '../../components/UI/CartMessage/CartMessage'; 
interface frontPageProps {
    theme?: Object,
    addGamesToState: any,
    gamesFromState: any,
    showAddedToCart: boolean
}
const { Games } = jsonGames;
const frontPage: React.FC<frontPageProps> = (props) => {
    const FrontPage = styled.div`
        background-color: ${props => props.theme.black};
        display: flex;
        flex-direction: column;
        @media(max-width: 992px) {
            display: flex;
        }
    `
    const ContentWrapper = styled.div`
        flex: 1;
        @media(max-width: 992px) {
            flex: 1;
        }
    `
    const GalleryBg = styled.div`
        height: 100%;
        width: 100%;
        background-image: url(${bgImage});
        background-color: ${props => props.theme.black};
    `
        
    const gamesRegex = (gameObj: any) => {
        let route: any;
        let routes: Array<any> = []

        for(let game in gameObj){
            route = `/products/:tile=(${game})/:console=(${gameObj[game].consoles.join("|")})`;
            routes.push(route)
        }
        return routes
    }

    useEffect(() => {
        props.addGamesToState(Games);

    }, [])

    //create exact paths for games
    let gameRoutes, exactRoutes:any;

    if(props.gamesFromState){
        let gamesCopy:any = {...props.gamesFromState};
        gameRoutes = gamesRegex(gamesCopy);
        exactRoutes = gameRoutes.map((route:string) => <Route path={route} component={ProductInfo} />)
    }
    
    return (
        <>
        {exactRoutes}
        <GalleryBg>
            <Gallery />
        </GalleryBg> 
        
        <FrontPage>
            
            <ContentWrapper>                
                <Products />
            </ContentWrapper>

        </FrontPage> 
        <CartMessage show={props.showAddedToCart} />
        </>
    )
}

const mapStateToProps = (state: any) => {
    return {
        gamesFromState: state.games,
        showAddedToCart: state.showAddedToCart
    }
};
const mapDispatchToProps = (dispatch:Function, ownProps:any) => {
    return {
       addGamesToState: (allGames:any) => dispatch(actions.getGames(allGames))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(frontPage));
/*     useEffect(() =>
    {
        axios.get("/Games.json")
        .then(res => {
            setProducts(res.data)
        })
        .catch(error => console.log(error))

        return () => {
        setProducts({})
        }
    }, []) */

    /*
     useEffect(() => {
        const { Games } = jsonGames
        setProducts(Games)

    }, [fetchedProducts]) */
    
    /* <Products fetchedProducts={fetchedProducts} /> */
    
