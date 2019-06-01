import React from 'react'
import styled, { withTheme } from 'styled-components';
import Navigation from '../../Navigation/Navigation';
import SearchBar from '../../UI/SearchBar/SearchBar';

interface AsideInterface {
    theme?: any
}
const aside:React.FC<AsideInterface> = props =>{
    
    const Aside = styled.aside`
        flex: 2;
        @media all and (max-width: 992px){
            display: none;
        }
    `
    return(
        <Aside>
            <SearchBar />
            <Navigation />
        </Aside>
    )
}

export default withTheme(aside);