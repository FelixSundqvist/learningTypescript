import React from 'react';
import styled, { withTheme } from 'styled-components';
import Button from '../../../UI/Buttons/Button';
interface searchProps {
    theme?: Object
}

const searchBar: React.FC<searchProps> = (props) => {

    const theme = props.theme;

    const SearchBarWrapper = styled.div`
        position: relative;
        width: 50%;
        height: 100%;
        float: right;
        margin-right: ${props => props.theme.margin};
    `
    const SearchBar = styled.input`
        height: 100%;
        width: 100%;
        border: 2px solid white;
        overflow: none;
        background-color: transparent;
        font-size: 2vh;
        &:active {
            border-color: ${props => props.theme.mainColor}
        }
        &:focus {
            background-color: ${props => props.theme.mainAccent};
            outline: none;
        }
    `
    const buttonStyle = {
        position: "absolute",
        right: "4%",
        top: "50%",
        transform: "translateY(-50%)",
        height: "60%",
        width: "20%"
    }

    return(
        <SearchBarWrapper >
            <SearchBar type = "text" />
            <Button style={buttonStyle} ></Button>
        </SearchBarWrapper>
    )
}

export default withTheme(searchBar);