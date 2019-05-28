import React from 'react';
import styled from 'styled-components';
import CardWrapper from '../../CardWrapper/CardWrapper';
import Spinner from '../../UI/Spinner/Spinner';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductInfo from '../../ProductInfo/ProductInfo';


interface SegmentInterface {
    theme?: Object,
    games?: Array<any> | undefined
    
}
const segment: React.FC<SegmentInterface> = (props) => {
    const Segment = styled.div`
      
    `
    let items:any;

    if(!items){
        items = <Spinner />;
    }else{
       items = props.games;
    }
    
    
    return (
        <Segment>
            <h1>Hottest Hits</h1>
            <CardWrapper backgroundColor="#ddc" />
            <Route path="/products/title=:title" exact component={ProductInfo}/>
        </Segment>
    )
}

const mapStateToProps = (state:any, ownProps:any) => {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps)(segment);