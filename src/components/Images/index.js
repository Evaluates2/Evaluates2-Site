import React from "react"
import { ImagesContainer, Def1, Def2, Def3} from "./styles"
import {StaticQuery} from "gatsby"
import def1 from "../../data/def1.png"
import def2 from "../../data/def2.png"
import def3 from "../../data/def3.png"

import styled from 'styled-components';
import mediaQuery from '../../utils/mediaQuery';

export const ImageTitle = styled.div`
  z-index: 10;
  position: relative;
  bottom: -18vh;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
`;

export const Title = styled.div`
 h1#home-h {

color: white;
font-size: 120px;
line-height: 140px;
font-weight: 800;
text-align: center;
letter-spacing: 5px;
font-family: 'e2-Raleway-Extra-Bold';
margin-bottom: calc(13px + 2vw);
margin-top: calc(10px + 1vw);
  letter-spacing: 0.5vw;
  line-height: calc(21px + 9vw);
  font-size: calc(16px + 8vw);
${mediaQuery.maxNetbook} {
  font-size: 70px;
  line-height: 70px;
}
${mediaQuery.maxPhone} {
  font-size: 40px;
}

-webkit-animation: fadein 1.5s; /* Safari, Chrome and Opera > 12.1 */
-moz-animation: fadein 1.5s; /* Firefox < 16 */
-ms-animation: fadein 1.5s; /* Internet Explorer */
-o-animation: fadein 1.5s; /* Opera < 12.1 */
animation: fadein 1.5s;
animation-timing-function: ease-in;
animation-fill-mode: forwards;
opacity: 0;

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
}
`;

export const Sub = styled.div`
  font-size: calc(12px + 1.25vw);
  color: white;
  line-height: 45px;
  font-weight: 400;
  padding-top: 1vw;
  letter-spacing: 1px;
  text-align: center;
  font-family: 'e2-Raleway';
  ${mediaQuery.maxNetbook} {
    font-size: 23px;
    line-height: 40px;
  }
  ${mediaQuery.maxPhone} {
    font-size: 15px;
  }

  -webkit-animation: fadein 1.5s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 1.5s; /* Firefox < 16 */
  -ms-animation: fadein 1.5s; /* Internet Explorer */
  -o-animation: fadein 1.5s; /* Opera < 12.1 */
  animation: fadein 1.5s;
  opacity: 0;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  animation-delay: 1.25s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Images = () => (
    <StaticQuery
        query={graphql`
          query LOGO_DEFIMAGE_QUERY {
            file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                  fixed(width: 1000) {
                    ...GatsbyImageSharpFixed_tracedSVG
                  }
                }
            }
          }
        `}
        render={data => (
            <ImagesContainer>
                <ImageTitle>
                    <Title>
                        <h1 id="home-h">
                        Together,
                        </h1>
                        </Title>
                    <Sub>we will build great things.</Sub>
                </ImageTitle>
                <Def3>
                    <img src={def1} alt="def1" />
                </Def3>
                <Def2>
                    <img src={def2} alt="def2" />
                </Def2>
                <Def1>
                    <img src={def3} alt="def3" />
                </Def1>
            </ImagesContainer>
        )}
    />
)

export default Images