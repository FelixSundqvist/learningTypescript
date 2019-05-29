/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import styled, { withTheme } from 'styled-components'; 
import { connect } from 'react-redux';
import { Route } from 'react-router';
import Gallery from '../AutoPlayGallery/Gallery';
import Products from '../../components/FrontPage/Products';
import Aside from '../../components/FrontPage/Aside/Aside';
//import axios from '../../axios-games';
import * as actions from '../../store/actions/actions';
import jsonGames from '../../assets/fakewebpage-b18d3-export.json';
import ProductInfo from '../../components/FrontPage/ProductInfo/ProductInfo';



interface frontPageProps {
    theme?: Object,
    addGamesToState: any
}

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
    const { Games } = jsonGames;
    props.addGamesToState(Games);

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
    return (
        <>
        <Gallery />
        <FrontPage>
            
            <ContentWrapper>                
                <Products />
            </ContentWrapper>
            <Route path="/products/title=:title" exact component={ProductInfo}/>

        </FrontPage> 
        </>
    )
}
const mapStateToProps = (state:any, ownProps:any) => {
    return {
        gamesFromState: state.games
    }
}
const mapDispatchToProps = (dispatch:Function, ownProps:any) => {
    return {
       addGamesToState: (allGames:{[key:string]:any}) => dispatch(actions.getGames(allGames))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(frontPage));