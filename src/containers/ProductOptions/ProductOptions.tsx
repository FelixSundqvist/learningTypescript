import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CartButton from '../../components/UI/Buttons/AddToCartButton/CartButton';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/actions';
interface ProductOptionsInterface {
    theme?: Object,
    title?: string,
    options?: Array<string>,
    big?: boolean|undefined,
    onChange?: any,
    value?: string,
    showAdded?: any,
    showAddedBool?: boolean,
    addToCart: any
}
const ProductOptions: React.FC<ProductOptionsInterface> = (props) => {
    let selectOptions:any = <Spinner />;

    if(props.options){
        selectOptions = props.options.map(cur => <option key={cur} value={cur} label={cur}>{cur}</option>)
    }
    const Wrapper = styled.div`
        position: relative;
        margin: 16px;
        z-index: 9998;
        height: 40%;
        position: relative;
    `
    const clickAdd = (event:Event) => {
        event.preventDefault();
        props.showAdded();
        props.addToCart({
            title: props.title,
            console: props.value,
            amount: 1
        })
    }
    return (
        <Wrapper>
        <form>
            <label>Avaible options: </label>
            <select name="consoles" 
                value = { props.value } 
                onChange={ props.onChange }>
                { selectOptions }</select>
            <CartButton 
                big={ props.big } 
                onClick={(event:Event) => clickAdd(event)}
                />
        </form>  
        </Wrapper>
    )
}

const mapStateToProps = (state:any, ownProps:any) => {
    return {
        showAddedBool: state.showAddedToCart,
        cartFromState: state.cart
    }
}

const mapDispatchToProps = (dispatch:Function, ownProps:any) => {
    return {
        showAdded: (() => dispatch(actions.showAdded())),
        addToCart: ((item: any) => dispatch(actions.addToCart(item)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductOptions);