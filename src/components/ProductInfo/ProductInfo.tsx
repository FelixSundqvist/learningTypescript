import React from 'react';
import styled, { withTheme } from 'styled-components';
import Backdrop from '../UI/Backdrop/Backdrop';
import Badge from '../UI/Badge/Badge';
import CancelButton from '../UI/Buttons/CancelButton/CancelButton';
import CartButton from '../UI/Buttons/CartButton/CartButton';
import { connect } from 'react-redux';
interface ProductInterface{
    theme?: {
        [key:string] : any
    },
    [key:string] : any
}


const productInfo:React.FC<ProductInterface> = (props) => {
    const { match } = props;

    const product  = props.gamesFromState[match.params.title]
    
    const ProductInfo = styled.div`
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        flex: 1;
        height: 90vh;
        width: 90vw;
        z-index: 999;
        background-color: white;
        border: 2px solid black;
        margin: 2rem;
        
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        @media all and (max-width: 992px) {
            flex-direction: column;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: 0;
            transform: translateX(0);
            height: 100vh;
            width: 100vw;
        }
    `
    const ImageDiv = styled.div`

        padding: 1vh;
        flex: 2;
        overflow: hidden;
        img{
            margin: 0 auto;
            display: block;
            width: 100%;
            height: auto;
        }
        @media all and (max-width: 992px) {
            padding: 0;
            flex: 4;
            img{
                width: auto;
                height: 100%;
            }
        }
    `

    const TextDiv = styled.div`
        height: 100%;
        width: 100%;
        padding: 0 4vw;
        height: 100%;
        overflow: auto;
        background-color: ${props.theme ? props.theme.secondaryAccent : "#ccf"};
        flex: 4;
        p{
            text-align: left;
        }
    `
    const backdropClick = () => {
        props.history.push("/");
    }

    

    const badges = product.consoles 
    ? product.consoles.map((current:any) => <Badge text={current} key={current} />)
    : null;
   
    return (
        <>
            <Backdrop show={true} onClick={backdropClick} />
            <ProductInfo>
                <CancelButton onClick={backdropClick}/>
                <ImageDiv>
                    <img src={product.image ? product.image : ""} alt={product.title}/>
                </ImageDiv>

                <TextDiv> 
                    <h2>{match.params.title}</h2>
                    {badges}
                    <p>{product.body}</p>
                    <CartButton />
                </TextDiv>
            </ProductInfo>
        </>
    )
}
const mapStateToProps = (state:any, ownProps:any) => {
    return {
        gamesFromState: state.games
    }
}
export default connect(mapStateToProps)(withTheme(productInfo));
