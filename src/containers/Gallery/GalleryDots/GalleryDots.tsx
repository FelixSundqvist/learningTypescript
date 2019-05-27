import React from 'react';
import styled from 'styled-components';
interface GalleryDotInterface {
    current?: boolean,
    onClick: any
}
const galleryDots:React.FC<GalleryDotInterface> = (props) => {
    

    const GalleryDot = styled.span `
        display: inline-block;
        margin: 10px;
        height: 30px;
        width: 30px;
        padding: 10px;
        opacity: ${props.current ? "1" : "0.4"};
        background-color: ${props.current ? "#ddd " : "#ccc"};
        border-radius: 50%;
        &:hover {
            cursor: pointer;
        }
    `


    return(
        <GalleryDot onClick={props.onClick}/>
    )
}

export default galleryDots;