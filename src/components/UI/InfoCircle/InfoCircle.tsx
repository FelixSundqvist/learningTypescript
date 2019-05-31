import React from 'react'
import styled, { withTheme } from 'styled-components';
import creditCard from '../../../assets/icons/credit-card-solid.svg';
import truck from '../../../assets/icons/truck-solid.svg';
import check from '../../../assets/icons/check-solid.svg';

interface infoCircleInterface{
    [key:string] : any,
    theme? : any
}
const infoCircle: React.FC<infoCircleInterface> = (props) => {
    
    const Wrapper = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
        padding: 1vh;
        background-color: #eee;
    `
    const Circle = styled.div`
        border-radius: 50%;
        height: 300px;
        width: 300px;
        margin: 2em;
        color: white;
        background-color: blueviolet;

        div{
            background-size: 50%;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            width: 100%;
            height: 100%;
            color: ${props.theme ? props.theme.black : "black"}
        }
        @media (max-width: 992px) {
            height: 200px;
            width: 200px;
        }
    `

        console.log(props)
        const circles = [
                {
                    color: props.theme.mainColor, 
                    icon: creditCard,
                    text: "Good Payment Options"
                }, 
                {
                    color: props.theme.mainAccent,
                    icon: truck,
                    text: "Fast Delivery"
                }, 
                {
                    color: props.theme.mainColor, 
                    icon: check,
                    text: "Recive Product"
                } ].map(
            current => {

                return <Circle style={{backgroundColor: current.color}}>
                            <div style={{backgroundImage: `url(${current.icon})`}}></div>
                            <div><p>{current.text}</p></div>
                        </Circle>
            }
        )
  
return (
        <Wrapper>
            {circles}
        </Wrapper>
    )
}

export default withTheme(infoCircle);