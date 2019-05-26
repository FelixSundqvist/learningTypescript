import React from 'react';
import styled, { withTheme } from 'styled-components'; 
import Gallery from '../../containers/Gallery/Gallery';

interface frontPageProps {
    theme?: Object
}

const frontPage: React.FC<frontPageProps> = (props) => {
    const FrontPage = styled.div`
        grid-row: 1;
        grid-column: 1 / span 3;
        background-color: ${props => props.theme.black};
        display: flex;
        justify-content: center;
        
    `
    const ContentWrapper = styled.div`
        flex: 0 0 100vw;
        background-color: ${props => props.theme.white};
        box-shadow: 1vh 2vh 3vh #000;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: inherit;
    `
    
    return (
        <FrontPage>
            <ContentWrapper>
                
            <Gallery />
            </ContentWrapper>
        </FrontPage> 
    )
}

export default withTheme(frontPage);