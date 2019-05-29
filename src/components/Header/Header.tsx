import React from 'react'
import styled from 'styled-components';

const header: React.FC = (props: any) => {
    const Header = styled.header`
        width: 100%;
        height: 10vh;

    `
    return(
        <Header>
            <h1>GAMESTORE</h1>
        </Header>
    )
}

export default header;