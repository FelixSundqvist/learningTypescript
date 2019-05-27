/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import styled, { withTheme } from 'styled-components'; 
import Gallery from '../AutoPlayGallery/Gallery';
import ProductsPage from '../../components/Products/Products';
import Categories from '../../components/Categories/Categories';
import axios from '../../axios-games';
interface frontPageProps {
    theme?: Object
}

const frontPage: React.FC<frontPageProps> = (props) => {
    const [fetchedProducts, setProducts] = useState();
    const FrontPage = styled.div`
        background-color: ${props => props.theme.black};
        display: grid;
        grid-gap: 0;
        grid-template-columns: repeat(6, (100 / 6)vw);
        grid-template-rows: 100vh 1fr;
    `
    const ContentWrapper = styled.div`
        background-color: ${props => props.theme.white};
        box-shadow: 1vh 2vh 3vh #000;
        background-color: inherit;
        grid-row: 2;
        grid-column: 1 / span 6;
        display: flex;
    `

    useEffect(() =>
    {
        axios.get("/Games.json")
        .then(res => {
            setProducts(res.data)
        })
        .catch(error => console.log(error))

        return () => {
        setProducts({})
        }
    }, [])

    
    return (
        <FrontPage>
            {/* full page gallery */}
            <Gallery />
            
            <ContentWrapper>

                <Categories />
                <ProductsPage fetchedProducts={fetchedProducts} />

            </ContentWrapper>


        </FrontPage> 
    )
}

export default withTheme(frontPage);