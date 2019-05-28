import React from 'react'
import styled, { withTheme } from 'styled-components';
import Navigation from '../../Header/Navigation/Navigation';

interface CategoriesInterface {
    theme?: any
}
const categories:React.FC<CategoriesInterface> = props =>{
    
    const Categories = styled.aside`
        flex: 1;
        padding: 2vh;
        @media all and (max-width: 992px){
            display: none;
        }
    `

    return(
        <Categories>
            <Navigation style={{
                backgroundColor: props.theme.secondaryColor
                 ? props.theme.secondaryColor 
                 : null}}/>
        </Categories>
    )
}

export default withTheme(categories);