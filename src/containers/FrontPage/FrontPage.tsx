/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import styled, { withTheme } from 'styled-components'; 
import { connect } from 'react-redux';
import Gallery from '../AutoPlayGallery/Gallery';
import Products from '../../components/FrontPage/Products/Products';
import Categories from '../../components/FrontPage/Aside/Aside';
//import axios from '../../axios-games';
import * as actions from '../../store/actions/actions';
import jsonGames from '../../assets/fakewebpage-b18d3-export.json';


interface frontPageProps {
    theme?: Object,
    addGamesToState: any
}

const frontPage: React.FC<frontPageProps> = (props) => {
    const FrontPage = styled.div`
        background-color: ${props => props.theme.black};
        display: grid;
        grid-gap: 0;
        grid-template-columns: repeat(6, (100 / 6)vw);
        grid-template-rows: 100vh 1fr;
    `
    const ContentWrapper = styled.div`
        background-color: ${props => props.theme.white};
        
        background-color: inherit;
        grid-row: 2;
        grid-column: 1 / span 6;
        display: flex;
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
        <FrontPage>
            {/* full page gallery */}
            <Gallery />
            <ContentWrapper>

                <Categories />
                <Products />

            </ContentWrapper>
        </FrontPage> 
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