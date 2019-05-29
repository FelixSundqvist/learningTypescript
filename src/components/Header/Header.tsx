import React from 'react'
import styled from 'styled-components';
import Navigation from '../Menu/Navigation/Navigation';

const header: React.FC = (props: any) => {
    const Header = styled.header`
        width: 100%;
        height: 100%;

    `
    return(
        <Header>
            <h1>GAMESTORE</h1>
            <Navigation />
            
            
        </Header>
    )
}

export default header;