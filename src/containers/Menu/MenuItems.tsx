/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';
import { connect } from 'react-redux';
import Navigation from '../../components/Navigation/Navigation';
import MenuToggle from '../../components/UI/Buttons/MenuToggle/MenuToggle';
import Menu from './Menu';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import CartToggle from '../../components/UI/Buttons/CartToggle/CartToggle';
import Cart from '../../components/CartItems/Cart';

interface MenuProps{
    theme?: Object,
    cart: Array<Object>
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
    });

    interface StateInterface{
        show: boolean,
        delay: boolean
    }

    const Wrapper = styled.div `
        position: fixed;
        z-index: 9999;
        top: 0;
        right: 0;
        width: 100vw;
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
                animationDelay= { toggleCart.delay || toggleMenu.delay  }
                show = { toggleCart.show }
                >
            </CartToggle>
            
                <Cart 
                    toggleCart={toggleCart}
                    cart={props.cart} /> 
            
 
            <Backdrop onClick = {cartToggle} show = { toggleCart.show } />  
             
            <MenuToggle toggleMenu = { menuToggle } 
                animationDelay = { toggleMenu.delay || toggleCart.delay }/>
                <Menu 
                    toggleMenu={toggleMenu}
                >
                    <Navigation 
                        menu
                        showMenu = { toggleMenu.show } 
                        toggleMenu = { menuToggle } />
                </Menu>

            <Backdrop onClick = {menuToggle} show = { toggleMenu.show } />
        </Wrapper>
    )   
}

const mapStateToProps = (state: any) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(withTheme(menu));