import React, { useState } from 'react';

function withAddToCart(WrappedComponent: any):any{
    return (props:any) => {

        const [showMessage, setShowMessage] = useState(false);

        const clickAdd = () => {
            setShowMessage(true)
        }

        return <WrappedComponent clickAdd = { clickAdd } {...props}>
                    {props.children}
                </WrappedComponent>
    }}

export default withAddToCart;