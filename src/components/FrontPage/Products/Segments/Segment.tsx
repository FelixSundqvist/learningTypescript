import React from 'react';
import styled from 'styled-components';
import CardWrapper from '../../../Cards/CardWrapper';
import { Route } from 'react-router-dom';
import ProductInfo from '../../ProductInfo/ProductInfo';
interface SegmentInterface {
    theme?: Object,
    title: string
}
const segment: React.FC<SegmentInterface> = (props) => {
    const Segment = styled.div`
      
    `
    return (
        <Segment>
            <h1>{props.title}</h1>
            <CardWrapper />
            <Route path="/products/title=:title" exact component={ProductInfo}/>
        </Segment>
    )
}



export default segment;