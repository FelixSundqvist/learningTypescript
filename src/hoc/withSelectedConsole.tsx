/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'

export default function withSelectedConsole(WrappedComponent: any):any{
    return (props:any) => {
        const [ selectedConsole, changeSelected ] = useState("PlayStation 4");

        const changeConsole = (event: any) => {
            changeSelected(event.target.value)
        }        
        return <WrappedComponent 
        selectedConsole={selectedConsole}
        changeConsole={(event:any) => changeConsole(event)}
        {...props}>{props.children}</WrappedComponent>
    }
}
