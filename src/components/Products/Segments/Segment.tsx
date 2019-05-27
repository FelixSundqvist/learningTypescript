import React from 'react';
import styled from 'styled-components';
import CardWrapper from '../../CardWrapper/CardWrapper';
import Spinner from '../../UI/Spinner/Spinner';
import { isNull } from 'util';
interface SegmentInterface {
    theme?: Object,
    games: Array<any> |null
    
}
const segment: React.FC<SegmentInterface> = (props) => {
    const Segment = styled.div`
      
    `

    let games:any;
    if(games === null){
        games = <Spinner />;
    }else{
       games = props.games;
    }
    
    
    return (
        <Segment>
            <h1>Hottest Hits</h1>
            <CardWrapper backgroundColor="#ddc" >
                {games}
            </CardWrapper>
        </Segment>
    )
}

export default segment;