import React from 'react';
import CardWrapper from '../../../CardWrapper/CardWrapper';
interface SegmentInterface {
    theme?: Object,
    games: Array<any> |null
}
const segment: React.FC<SegmentInterface> = (props) => {
    return (
        <>
            <h1>Hottest Hits</h1>

            <CardWrapper>
                { props.games }
            </CardWrapper>
        </>
    )
}

export default segment;