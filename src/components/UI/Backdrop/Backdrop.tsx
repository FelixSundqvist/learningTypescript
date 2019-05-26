import React from 'react'
import styled from 'styled-components';

interface BackdropInterface {
    show: boolean
    onClick: any
}

const backdrop:React.FC<BackdropInterface> = (props) => {

    const Backdrop = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: black;
        opacity: .5;
        height: 100vh;
        width: 100vw;
        z-index: 99;
        display: ${props.show ? "block" : "none"}
    `
    return (
        <Backdrop onClick = {props.onClick} />
    )
}

export default backdrop;