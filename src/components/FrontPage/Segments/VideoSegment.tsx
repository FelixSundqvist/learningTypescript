import React from 'react';
import styled from 'styled-components';
interface videoInterface{
    src: string,
    title: string
}
const videoSegment = (props:any) => {
    const VideoSegment = styled.div`
        width: 100%;
        margin:  1vh auto;
    `
    return(
        <VideoSegment>
            <h2>{props.title}</h2>
            <iframe id="video" title="YouTube" width="720" height="405"
            src={props.src}></iframe>
        </VideoSegment>
    )
}

export default videoSegment;