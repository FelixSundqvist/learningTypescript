import React from 'react'
import styled, { withTheme } from 'styled-components';

interface CardWrapperInterface {
    theme?: Object,
    width?: string,
    height?: string,
    backgroundColor?: string
}

const CardWrapper:React.FC<CardWrapperInterface> = props => {

    const bgColor:string|null = props.backgroundColor? props.backgroundColor : null;

    const CardContainer = styled.div`
        width: ${props.width ? props.width : "100%"};
        min-height: ${props.height ? props.height : "500px"};
        background-color: ${bgColor};
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
