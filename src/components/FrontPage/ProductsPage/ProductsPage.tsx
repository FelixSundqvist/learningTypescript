/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from '../../../axios-games';
import shortid from 'shortid';
import styled, { withTheme } from 'styled-components';

import Card, {CardInterface} from '../../UI/Card/Card';
import ProductInfo from '../../ProductInfo/ProductInfo';
import Segment from './Segments/Segment';
import Spinner from '../../UI/Spinner/Spinner';


interface ProductsInterface {
    theme?: Object
}

const productsPage:React.FC<ProductsInterface> = (props) => {
    const [allGames, setGames] = useState();

    const ProductsPage = styled.div`
        flex: 5;
        background-color: ${props => props.theme.black};
        display: flex;
        justify-content: center;
        padding: 2vh;
    `
    const Wrapper = styled.div`
        background-color: ${props => props.theme.white};
        width: 100%;
        height: 100%;
        margin: 0 auto;
    `
    useEffect(() =>
    {
        axios.get("/Games.json")
        .then(res => {
            setGames(res.data)
        })
        .catch(error => console.log(error))
    }, [])


    let gameElementsArr:any;

    if(allGames) {
        gameElementsArr = Object.keys(allGames).map(current => {
            const game:CardInterface = allGames[current];
            return <React.Fragment key ={shortid()}>
                    <Card 
                     title={game.title}
                     body={game.body}
                     image={game.image}
                     price={game.price}
                     link={game.link}
                     consoles={game.consoles}
                     />
                     <Route path={game.link} 
                        render={() => 
                        <ProductInfo 
                        title={game.title}
                        body={game.body}
                        image={game.image}
                        price={game.price}
                        link={game.link}
                        consoles={game.consoles} />}
                        />
                    </React.Fragment>
         })
    }else{
        gameElementsArr = <Spinner />
    }

    return (
        <ProductsPage>
            <Wrapper>

            <Segment games = {gameElementsArr} />

            </Wrapper>
        </ProductsPage>
    )
}

export default productsPage;