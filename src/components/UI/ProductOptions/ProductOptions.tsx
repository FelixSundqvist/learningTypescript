import React from 'react';
import styled from 'styled-components';
import CartButton from '../Buttons/CartButton/CartButton';
import Spinner from '../Spinner/Spinner'
interface ProductOptionsInterface {
    theme?: Object,
    title?: string,
    options?: Array<string>
}
const ProductOptions: React.FC<ProductOptionsInterface> = (props) => {

    let selectOptions:any = <Spinner />;

    if(props.options){
        selectOptions = props.options.map(cur => <option value={cur} label={cur}>{cur}</option>)
    }
  
    return (
        <form>
            <label>Avaible options: </label>
            <select name="Consoles">{selectOptions} </select>
            <CartButton />
        </form>
        
    )
}



export default ProductOptions;