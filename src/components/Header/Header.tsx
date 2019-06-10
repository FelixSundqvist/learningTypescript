import React from 'react'
import styled from 'styled-components';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

const header: React.FC = (props: any) => {
    const Header = styled.header`
        width: 100%;
        height: 100%;
        border: 2px solid black;
    `
    return(
        <>
        <Header>
                <h1>GAMESTORE</h1>  
        </Header>
        <Navigation />
        </>
    )
}

export default header;