/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
function withSelectedConsole(WrappedComponent: any):any{
    return (props:any) => {
        const consoles = props.consoles ? [...props.consoles] : "Playstation 4";
        const [ selectedConsole, changeSelected ] = useState(consoles[0]);

        const changeConsole = (event: any) => {
            changeSelected(event.target.value)
        }

        return <WrappedComponent 
        selectedConsole={selectedConsole}
        changeConsole={(event:any) => changeConsole(event)}
        {...props}>{props.children}</WrappedComponent>
    }
}


export default withSelectedConsole;