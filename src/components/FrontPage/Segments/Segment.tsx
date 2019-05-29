import React from 'react';
import styled from 'styled-components';
import CardWrapper from '../../Cards/CardWrapper';

interface SegmentInterface {
    theme?: Object,
    title: string
}
const segment: React.FC<SegmentInterface> = (props) => {
    const Segment = styled.div`
    
    `
    return (
        <Segment>
            {/* <h1>{props.title}</h1> */}
            <CardWrapper />
            
        </Segment>
    )
}



export default segment;