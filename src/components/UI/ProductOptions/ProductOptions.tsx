import React from 'react';
import styled from 'styled-components';
import CartButton from '../Buttons/AddToCartButton/CartButton';
import Spinner from '../Spinner/Spinner'
interface ProductOptionsInterface {
    theme?: Object,
    title?: string,
    options?: Array<string>,
    big?: boolean|undefined,
    onChange?: any,
    value?: string
}
const ProductOptions: React.FC<ProductOptionsInterface> = (props) => {

    let selectOptions:any = <Spinner />;

    if(props.options){
        selectOptions = props.options.map(cur => <option value={cur} label={cur}>{cur}</option>)
    }

    const Wrapper = styled.div`
        position: relative;
        margin: 16px;
        z-index: 9998;
        height: 40%;
        position: relative;
    `
  
    return (
        <Wrapper>
        <form>
            <label>Avaible options: </label>
            <select name="consoles" 
                value = {props.value} 
                onChange={props.onChange}>
                {selectOptions}</select>
            <CartButton big={props.big}/>
        </form>
        </Wrapper>
    )
}

export default ProductOptions;