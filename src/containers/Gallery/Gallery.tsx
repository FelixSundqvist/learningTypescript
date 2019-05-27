/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import styled, { withTheme } from 'styled-components';
import slideContent from './slideContent';
import Slide, { createSlideBlocks } from './Slide/Slide';
import GalleryDots from './GalleryDots/GalleryDots';
interface GalleryProps {
    theme?: Object,
    height?: string,
    width?: string,
} 

const gallery:React.FC<GalleryProps> = (props) => {
    
    const [currentSlide, changeSlide] = useState(0);
    let galleryTimer:any;
    function timed() {
            currentSlide <= slideContent.length - 2
            ? changeSlide(slide => slide + 1) 
            : changeSlide(0)
            }

    useEffect(() => {
        galleryTimer = setTimeout(() => { timed() }, 3000)})

    const Gallery = styled.div`
        position: relative;
        margin: 0 auto;
        
        grid-row: 1;
        grid-column: 1 / span 6;

        height: ${props.height ? props.height: "100%" };
        width: ${props.height ? props.height: "100%" };;
    `
    //Wrapper for slides
    const Wrapper = styled.div`
        position: relative;
        height: 100%;
        width: 100%;
        overflow: hidden;
    `
    const GalleryDotWrapper = styled.div`
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 999;
        background-color: rgba(188,188,188,0.5);
    `

    const changeCurrentSlide = (id: number) => {
        clearTimeout(galleryTimer)
        changeSlide(id)
    }
    //get inner content for slides from slideContent
    const completeSlides = slideContent.map((slide, id) => {
        const flexDirection = slide.direction ? slide.direction : "row";
        return id === currentSlide
         ? <Slide 
            key={shortid()}
            blockDirection={flexDirection} 
            current >
            {createSlideBlocks(slide)}</Slide>
         : <Slide 
            key={shortid()} 
            blockDirection={flexDirection} >
            {createSlideBlocks(slide)}</Slide>
    })
    const dots = slideContent.map((item, id) => {
        if(currentSlide === id){
            return <GalleryDots onClick={() => changeCurrentSlide(id)} current />
        }else{
            return <GalleryDots onClick={() => changeCurrentSlide(id)}/>
        }
    })


    return (
        <Gallery>
            <Wrapper>
                {completeSlides}
            </Wrapper>
            <GalleryDotWrapper>
                {dots}
            </GalleryDotWrapper>
        </Gallery>
    )
}

export default withTheme(gallery);