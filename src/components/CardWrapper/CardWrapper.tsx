import React from 'react'
import styled, { withTheme } from 'styled-components';

interface CardWrapperInterface {
    theme?: Object,
    width?: string,
    height?: string
}

const CardWrapper:React.FC<CardWrapperInterface> = props => {
    const CardContainer = styled.div`
        width: ${props.width ? props.width : "100%"};
        min-height: ${props.height ? props.height : "500px"};
        display: flex;
        justify-content: center;
        align-items: space-between;
        flex-wrap: wrap;
    ` 

    return (
        <CardContainer>
            {props.children}
        </CardContainer>
    )
}

export default withTheme(CardWrapper);
