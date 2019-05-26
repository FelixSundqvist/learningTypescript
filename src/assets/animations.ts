export const headerAnimation = `
@keyframes expand {
    from {
        width: 0%;
    }
    to {
        width: 90%;
        right: 50%;
    }
};
@keyframes shrink {
    0% {
        width: 90%;
        right: 50%;
    }

    100% {
        width: 0%;
        right: 0%;
    }

}
`

export const galleryAnimation = `
@keyframes moveLeft {
    from{
        left: 100%;
    }
    to{
        left: 0;
    }
}
@keyframes moveBack {
    0% {
        left: 0;
        z-index: -1;
    }
    100% {
        left: 100%;
        
    }
}
`

