import styled from "styled-components"
import mediaQuery from "../../utils/mediaQuery"

export const IntroContainer = styled.div`
    position: relative;
    bottom: auto;
    z-index: 9;
    overflow: hidden;
    color: white !important;
    background-image: linear-gradient(180deg,#000,#000032);
    padding: 50px;

    p {
        font-size: 27px;
        line-height: 45px;


        a {
            color: #f0f;

            :hover {
                color: #FF99FF;
            }
        }
    }
`