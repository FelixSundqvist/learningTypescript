import React from 'react';
import styled, { withTheme } from 'styled-components'; 

interface frontPageProps extends React.Props<any>{
    theme: Object
}

const frontPage: React.FC<frontPageProps> = (props) => {
    const FrontPage = styled.div`
        flex: 0 0 100vh;
        background-color: ${props => props.theme.secondaryColor};
    `
    return (
        <FrontPage>
            
        </FrontPage> 
    )
}

export default withTheme(frontPage);