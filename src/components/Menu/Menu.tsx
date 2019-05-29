/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';
import Navigation from './Navigation/Navigation';
import MenuToggle from '../UI/Buttons/MenuToggle/MenuToggle';
import { menuAnimation } from '../../assets/animations';
import Backdrop from '../UI/Backdrop/Backdrop';

interface MenuProps{
    theme?: Object
    /* dynamic keys = [key: string]: any; */
}

const menu: React.FC<MenuProps> = (props) => {
    const [toggleMenu, setMenuToggle] = useState({
        show: false,
        delay: false
    });
    interface StateInterface{
        show: boolean,
        delay: boolean
    }
    const Menu = styled.div`
        height: 8vh;
        position: absolute;
        top: -50%;
        right: 0;
        transform: translate(50%, 50%);
        overflow: hidden;
        z-index: 9999;
        border: .4vh solid ${props => props.theme.mainColor};
        animation: ${toggleMenu.show ? "expand 300ms forwards" : "shrink 400ms" };
        display: ${toggleMenu.delay ? "block" : "none"};
        ${ menuAnimation }
    `
    const MenuWrapper = styled.div`
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
        @media (max-width: 992px){
            margin: 0;
        }
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

    const toggle = toggleVisible.bind(null, toggleMenu, setMenuToggle);
    
    return(
        <Wrapper>
            <MenuToggle toggleMenu = { toggle } 
                animationDelay = { toggleMenu.delay }/>
            <MenuWrapper>
                <Menu>
                    <Navigation 
                        menu
                        showMenu = { toggleMenu.show } 
                        toggleMenu = { toggle } />
                </Menu>
            </MenuWrapper>

            <Backdrop onClick = {toggle} show = { toggleMenu.show } />
        </Wrapper>
    )   
}

export default withTheme(menu);