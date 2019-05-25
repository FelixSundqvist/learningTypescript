/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';
import Navigation from '../../components/Navigation/Navigation';
import createTransition from '../../utility/createTransitions';
import HeaderToggle from '../../components/UI/toggleButton/HeaderToggle/HeaderToggle';
import animations from '../../assets/animations';

interface headerProps extends React.Props<any>{
    theme?: Object
}

const transition = createTransition([
    {
        transitionElement: "opacity",
        transitionTime: 500,
        transitionType: "ease"
    }, 
    {
        transitionElement: "height",
        transitionTime: 200,
        transitionType: "ease-in"
    }
])

const header: React.FC<headerProps> = (props) => {
    const [toggleHeader, setHeaderToggle] = useState({
        show: false,
        delay: false
    });

    interface StateInterface{
        show: boolean,
        delay: boolean
    }
    
    const Header = styled.header`
        height: 8vh;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%, 50%);
        overflow: hidden;
        border: .4vh solid ${props => props.theme.white};
        border-radius: 2rem;
        animation: ${toggleHeader.show ? "expand 300ms forwards" : "shrink 500ms" };
        display: ${toggleHeader.delay ? "block" : "none"};
        ${ animations }
    `
        const HeaderWrapper = styled.div `
        position: fixed;
        z-index: 999;
        top: 0;
        right: 0;
        width: 100%;
    `

    const addDelay = (state: StateInterface, setState: Function) => {
        // timeout to make divs display none, for animations
        const updateAnimation = {...state};
        if(!state.delay) {
            setTimeout(() => {
                updateAnimation.delay = true
                setState(updateAnimation);
            }, 100);
        }else{
            setTimeout(() => {
                updateAnimation.delay = false
                setState(updateAnimation);
            }, 400);
        }
    };

    const toggleVisible = (state: StateInterface, setState:Function) => {
        const changedState = {...state};
        changedState.show = !changedState.show;
        setState(changedState);
        addDelay(changedState, setState);
    };

    const toggle = toggleVisible.bind(null, toggleHeader, setHeaderToggle)

    return(
        <HeaderWrapper>
            <HeaderToggle toggleHeader = { toggle } 
                        animationDelay = { toggleHeader.delay }/>
            <Header>
                <Navigation show = {toggleHeader.show} toggleHeader = { () => toggleVisible(toggleHeader, setHeaderToggle) } />
            </Header>
        </HeaderWrapper>
    )   
}

export default withTheme(header);