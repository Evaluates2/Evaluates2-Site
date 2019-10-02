import styled from "styled-components"
import mediaQuery from "../../utils/mediaQuery"

export const ImagesContainer = styled.div`
    position: relative;
    height: 90vh;
    min-height: auto;
    background-image: radial-gradient(circle farthest-corner at 49% 83%,#fff,#ff00d6 25%,#2c0277 79%,#040438);
    ${mediaQuery.maxTablet} {
        height: 70vh
    }
`
export const ImageTitle = styled.div`
    z-index:10;
    position: relative;
    bottom: -18vh;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
`

export const Title = styled.div`
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
    ${mediaQuery.maxPhone} {
        font-size: 40px;
    }

    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
         -o-animation: fadein 2s; /* Opera < 12.1 */
            animation: fadein 2s;

        @keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }


`

export const Sub = styled.div`
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
    ${mediaQuery.maxPhone} {
        font-size: 15px;
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
        ${mediaQuery.maxTablet} {
            top: 54vh;
            height: 40%;
        }
        ${mediaQuery.maxPhablet} {
            top: 57vh;
        }
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
        ${mediaQuery.maxTablet} {
            top: 51vh;
            height: 40%;
        }
        ${mediaQuery.maxPhablet} {
            top: 53vh;
        }
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
        ${mediaQuery.maxTablet} {
            top: 48vh;
            height: 40%;
        }
        ${mediaQuery.maxPhablet} {
            top: 50vh;
        }
    }

`