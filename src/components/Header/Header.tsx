/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';
import Navigation from './Navigation/Navigation';
import HeaderToggle from '../UI/Buttons/HeaderToggle/HeaderToggle';
import { headerAnimation } from '../../assets/animations';
import Backdrop from '../UI/Backdrop/Backdrop';

interface headerProps{
    theme?: Object
    /* dynamic keys = [key: string]: any; */
}

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
        top: -50%;
        right: 0;
        transform: translate(50%, 50%);
        overflow: hidden;
        z-index: 9999;
        border: .4vh solid ${props => props.theme.mainColor};
        animation: ${toggleHeader.show ? "expand 300ms forwards" : "shrink 400ms" };
        display: ${toggleHeader.delay ? "block" : "none"};
        ${ headerAnimation }
    `
    const HeaderWrapper = styled.div`
        position: relative;
        height: 10vh;
        width: 100%;
    `
    const Wrapper = styled.div `
        position: fixed;
        z-index: 999;
        top: 0;
        right: 0;
        margin-top: 1vh;
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

    const toggle = toggleVisible.bind(null, toggleHeader, setHeaderToggle);
    
    return(
        <Wrapper>
            <HeaderToggle toggleHeader = { toggle } 
                animationDelay = { toggleHeader.delay }/>
            <HeaderWrapper>
                <Header>
                    <Navigation 
                        header
                        showHeader = { toggleHeader.show } 
                        toggleHeader = { toggle } />
                </Header>
            </HeaderWrapper>

            <Backdrop onClick = {toggle} show = { toggleHeader.show } />
        </Wrapper>
    )   
}

export default withTheme(header);