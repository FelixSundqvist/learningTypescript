import React from 'react';
import styled, { withTheme } from 'styled-components'; 
import Gallery from '../../containers/Gallery/Gallery';
import ProductsPage from './ProductsPage/ProductsPage';
import Categories from './Categories/Categories';
interface frontPageProps {
    theme?: Object
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
        box-shadow: 1vh 2vh 3vh #000;
        background-color: inherit;
        grid-row: 2;
        grid-column: 1 / span 6;
        display: flex;
    `
    
    return (
        <FrontPage>
            {/* full page gallery */}
            <Gallery />
            
            <ContentWrapper>

                <Categories />
                <ProductsPage />

            </ContentWrapper>


        </FrontPage> 
    )
}

export default withTheme(frontPage);