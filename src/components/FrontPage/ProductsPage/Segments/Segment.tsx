import React from 'react';
import styled from 'styled-components';
import CardWrapper from '../../../CardWrapper/CardWrapper';
interface SegmentInterface {
    theme?: Object,
    games: Array<any> |null
    
}
const segment: React.FC<SegmentInterface> = (props) => {
    const Segment = styled.div`
      
    `
    return (
        <Segment>
            <h1>Hottest Hits</h1>
            <CardWrapper backgroundColor="#ddc" >
                { props.games }
            </CardWrapper>
        </Segment>
    )
}

export default segment;