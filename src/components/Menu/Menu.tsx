/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';
import { connect } from 'react-redux';
import Navigation from './Navigation/Navigation';
import MenuToggle from '../UI/Buttons/MenuToggle/MenuToggle';
import { menuAnimation, cartAnimation } from '../../assets/animations';
import Backdrop from '../UI/Backdrop/Backdrop';
import CartToggle from '../UI/Buttons/CartToggle/CartToggle';

interface MenuProps{
    theme?: Object
    /* dynamic keys = [key: string]: any; */
}

const menu: React.FC<MenuProps> = (props) => {
    const [toggleMenu, setMenuToggle] = useState({
        show: false,
        delay: false
    });
    
    const [toggleCart, setCartToggle] = useState({
        show: false,
        delay: false
    })

    interface StateInterface{
        show: boolean,
        delay: boolean
    }

    const Menu = styled.div`
        height: 50vh;
        width: 100%;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: black;
        overflow: hidden;
        z-index: 9999;
        border: .4vh solid ${props => props.theme.mainColor};
        animation: ${toggleMenu.show ? "expand 300ms forwards" : "shrink 400ms" };
        display: ${toggleMenu.delay ? "block" : "none"};
        ${ menuAnimation }
    `

    const Cart = styled.div`
        height: 50vh;
        width: 100%;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: black;
        overflow: hidden;
        z-index: 9999;
        color: white; 
        border: .4vh solid ${props => props.theme.mainColor};
        animation: ${toggleCart.show ? "expand 300ms forwards" : "shrink 400ms" };
        display: ${toggleCart.delay ? "block" : "none"};
        ${ cartAnimation }
        `

    const Wrapper = styled.div `
        position: fixed;
        z-index: 9999;
        top: 0;
        right: 0;
        width: 50vw;
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

    const menuToggle = toggleVisible.bind(null, toggleMenu, setMenuToggle);
    const cartToggle = toggleVisible.bind(null, toggleCart, setCartToggle);
    
    return(
        <Wrapper>
            <CartToggle 
                toggleCart = { cartToggle } 
                animationDelay= { toggleCart.delay }
                show={ toggleCart.show }
                >
            </CartToggle>
            
                <Cart> 
                    <p>In Cart:</p>
                        
                </Cart>
            
 
            <Backdrop onClick = {cartToggle} show = { toggleCart.show } />  
            
            
            <MenuToggle toggleMenu = { menuToggle } 
                animationDelay = { toggleMenu.delay }/>
                <Menu>
                    <Navigation 
                        menu
                        showMenu = { toggleMenu.show } 
                        toggleMenu = { menuToggle } />
                </Menu>

            <Backdrop onClick = {menuToggle} show = { toggleMenu.show } />
        </Wrapper>
    )   
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default withTheme(menu);