import styled from "styled-components"
import mediaQuery from "../../utils/mediaQuery"

export const ImagesContainer = styled.div`
    height: 90vh;
    min-height: auto;
    background-image: radial-gradient(circle farthest-corner at 49% 83%,#fff,#ff00d6 25%,#2c0277 79%,#040438);
`
export const ImageTitle = styled.div `
    z-index:10;
    position: relative;
    bottom: -18vh;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
`

export const Title = styled.div `
    color: white;
    font-size: 120px;
    line-height: 140px;
    font-weight: 800;
    text-align: center;
    letter-spacing: 5px;
    ${mediaQuery.maxNetbook} {
        font-size: 70px;
        line-height: 70px;
    }
`

export const Sub = styled.div `
    font-size: 38px;
    color: white;
    line-height: 45px;
    font-weight: 400;
    letter-spacing: 1px;
    text-align:center;
    ${mediaQuery.maxNetbook} {
        font-size: 23px;
        line-height: 40px;
    }
`

export const Def1 = styled.div`
    img {
        will-change: transform;
        transform: translate3d(0px, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
        transform-style: preserve-3d;
        left: 0;
        top: 35vh;
        right: 0;
        z-index: 3;
        width: 100%;
        position: absolute;
        overflow: hidden;
    }
`

export const Def2 = styled.div`
    img {
        will-change: transform;
        transform: translate3d(0px, 0.45vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
        transform-style: preserve-3d;
        top: 45vh;
        z-index: 1;
        display: block;
        width: 100%;
        position: absolute;
        left: 0;
        right: 0;
        overflow: hidden;
    }
`

export const Def3 = styled.div`
    img {
        will-change: transform;
        transform: translate3d(0px, 0.75vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
        transform-style: preserve-3d;
        top: 40vh;
        display: block;
        width: 100%;
        position: absolute;
        left: 0;
        right: 0;
        overflow: hidden;
    }

`