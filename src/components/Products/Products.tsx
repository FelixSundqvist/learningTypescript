/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import shortid from 'shortid';
import styled, { withTheme } from 'styled-components';
import Segment from './Segments/Segment';

interface ProductsInterface {
    theme?: Object,
}

const products:React.FC<ProductsInterface> = (props) => {
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
    return (
        <ProductsPage>
            <Wrapper>

                <Segment />

            </Wrapper>
        </ProductsPage>
    )
}



export default withTheme(products);