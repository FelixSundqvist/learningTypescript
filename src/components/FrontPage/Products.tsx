/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import styled, { withTheme } from 'styled-components';
import Segment from './Segments/Segment';
import VideoSegment from './Segments/VideoSegment';
import Aside from './Aside/Aside';
interface ProductsInterface {
    theme?: Object,
}

const products:React.FC<ProductsInterface> = (props) => {
    const ProductsPage = styled.div`
        background-color: ${props => props.theme.mainColor};
        padding: 2em 0;
        flex: 1;
        margin: 0;
    `
    const Wrapper = styled.div`
        width: 80vw;
        margin: 0 auto;
        background-color: ${props => props.theme.white};
    `
    
    return (
            <ProductsPage>
                <Wrapper>
                    <Segment title="Hottest Hits" />
                    <VideoSegment src="https://www.youtube.com/embed/nmZdyeCRgus" title="Check out the latest hit from Capcom" />
                </Wrapper>
            </ProductsPage>
    )
}



export default withTheme(products);