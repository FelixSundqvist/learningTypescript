import React from 'react';
import styled from 'styled-components';


interface SegmentInterface {
    theme?: Object,
    title: string
}
const segment: React.FC<SegmentInterface> = (props) => {
    const Segment = styled.div`
        h2{
            font-size: 3em;
        }
    `
    return (
        <Segment>
            <h2>{props.title}</h2>
            {props.children}
            
        </Segment>
    )
}



export default segment;