import React from 'react'
import styled from 'styled-components';
import creditCardIcon from '../../../assets/icons/credit-card-solid.svg';
import truckIcon from '../../../assets/icons/truck-solid.svg';
import checkIcon from '../../../assets/icons/check-solid.svg';
interface infoCircleInterface{
    [key:string] : any
}
const infoCircle: React.FC<infoCircleInterface> = (props) => {
    
    const Wrapper = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
        padding: 1vh;
    `
    const Circle = styled.div`
        border-radius: 50%;
        height: 300px;
        width: 300px;
        margin: 2em;
        color: white;
        background-color: blueviolet;

        div{
            background-size: contain;
            border: 2px solid black;
            width: 100%;
            height: 100%;
           
        }
        @media (max-width: 992px) {
            height: 200px;
            width: 200px;
        }
    `

        console.log(props)
        const circles = [
            {color: "blue", icon:{creditCardIcon}}, 
            {color: "purple", icon:{truckIcon}}, 
            {color: "orange", icon:{checkIcon}} ].map(
            current => {

                return <Circle style={{backgroundColor: current.color}}>
                            <div style={{backgroundImage: `url(${current.icon})` }}>
                                
                            </div>
                        </Circle>
            }
        )
  
return (
        <Wrapper>
            {circles}
        </Wrapper>
    )
}

export default infoCircle;