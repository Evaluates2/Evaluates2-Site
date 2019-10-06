import styled from "styled-components"
import mediaQuery from "../../utils/mediaQuery"

export const TextContainer = styled.div`
    position: relative;
    z-index: 40px;
    max-width: 800px;
    min-width: 200px;
    -webkit-perspective: 608px;
    perspective: 608px;
    -webkit-transform: rotateX(.001deg) rotateY(0) rotateZ(0);
    transform: rotateX(.001deg) rotateY(0) rotateZ(0);
    font-size: 45px;
    line-height: 80px;
    font-family: Raleway,sans-serif;
    font-weight: 300;
    ${mediaQuery.maxTablet} {
        font-size: 20px;
        line-height: 40px;
        max-width: 500px;
        margin-right: 20px;
        margin-left: 20px;
      }
`

export const IntroContainer = styled.div`
    position: relative;
    bottom: auto;
    z-index: 9;
    overflow: hidden;
    color: white !important;
    background-image: linear-gradient(180deg,#000,#000032);
    padding: 50px;
    font-size: 27px;
    line-height: 45px;
    display: flex;
    min-height: 100vh;
    padding: 90px 100px;
    justify-content: center;
    a {
        color: #f0f;
        :hover {
            color: #FF99FF;
        }
    }
    ${mediaQuery.maxTablet} {
        min-height: auto;
        padding: 60px 20px;
    }
    
`