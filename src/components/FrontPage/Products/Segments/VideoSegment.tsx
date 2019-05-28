import React from 'react';
import styled from 'styled-components';
interface videoInterface{
    src: string,
    title: string
}
const videoSegment = (props:any) => {
    const VideoSegment = styled.div`
        width: 100%;
        margin:  1vh;
    `
    return(
        <VideoSegment>
            <h1>{props.title}</h1>
            <iframe width="720" height="405"
            src={props.src}></iframe>
        </VideoSegment>
    )
}

export default videoSegment;