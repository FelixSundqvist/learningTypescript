/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import styled, { withTheme } from 'styled-components';
import Segment from './Segments/Segment';
import VideoSegment from './Segments/VideoSegment';
import CardWrapper from './Cards/CardWrapper';
import InfoCircle from '../UI/InfoCircle/InfoCircle';
import withAddToCart from '../../hoc/withAddToCart';
interface ProductsInterface {
    theme?: Object,
}

const products:React.FC<ProductsInterface> = (props) => {
    const ProductsPage = styled.div`
        background-color: ${props => props.theme.mainColor};
        padding: 2em 0;
        flex: 1;
        margin: 0;
        margin:  1vh auto;
    `
    const Wrapper = styled.div`
        width: 80vw;
        margin: 0 auto;
        background-color: ${props => props.theme.white};
        h2{
            font-size: 3em;
        }
    `
    
    return (
            <ProductsPage>
                <Wrapper>
                    
                    <Segment title="Hottest Hits">
                        <CardWrapper />
                    </Segment>

                    <VideoSegment src="https://www.youtube.com/embed/nmZdyeCRgus" title="Check out the latest hit from Capcom" />
                    <Segment title="Free Delivery this week">
                        <InfoCircle />
                    </Segment>
                </Wrapper>
            </ProductsPage>
    )
}



export default withTheme(withAddToCart(products));