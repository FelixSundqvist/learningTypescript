import React from 'react'
import styled from 'styled-components';
import icon from '../../../../assets/icons/times-solid.svg';

interface CancelButtonInterface{
    onClick: any
}
const cancelButton: React.FC<CancelButtonInterface> = props => {
    const CancelButton = styled.div`
    position: absolute;
    top: 0;
    right: 10px;
    width: 25px;
        &:hover{
            cursor: pointer;
        }
    @media all and (max-width: 992px){
        width: 15px;
    }
    `
    return(
    <CancelButton onClick={props.onClick}> 
        <img src={icon} alt="exit" />
    </CancelButton>
    )
}

export default cancelButton;