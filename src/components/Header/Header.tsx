import React from 'react'
import styled from 'styled-components';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

const header: React.FC = (props: any) => {
    const Header = styled.header`
        width: 100%;
        height: 100%;

    `
    return(
        <Header>
            <Link to="/" >
                <h1>GAMESTORE</h1>  
            </Link>
            
            <Navigation />
            
            
        </Header>
    )
}

export default header;