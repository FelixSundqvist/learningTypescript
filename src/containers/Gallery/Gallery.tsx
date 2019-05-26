/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import styled, { withTheme } from 'styled-components';
import slideContent from './slideContent';
import Slide, { createSlideBlocks } from './Slide/Slide';
interface GalleryProps {
    theme?: Object,
    height?: string,
    width?: string,
} 

const gallery:React.FC<GalleryProps> = (props) => {
    
    const [currentSlide, changeSlide] = useState(0);

    useEffect(() => {
        setTimeout(()=>{currentSlide <= slideContent.length - 2 ? changeSlide(c => c + 1) : changeSlide(0)}, 3000);})

    const Gallery = styled.div`
        position: relative;
        margin: 0 auto;
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
    //get inner content for slides from slideContent
    const completeSlides = slideContent.map((slide, id) => {
        
        const flexDirection = slide.direction ? slide.direction : "row";
        console.log(flexDirection)
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

    return (
        <Gallery>
            <Wrapper>
                {completeSlides}
            </Wrapper>
        </Gallery>
    )
}

export default withTheme(gallery);