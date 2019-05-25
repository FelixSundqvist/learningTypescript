const animations = `
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
        top: 0;
        
    }
    75% {
        width: 0%;
    }

    100%{
        top: -100%;
        
    }
}`

export default animations;