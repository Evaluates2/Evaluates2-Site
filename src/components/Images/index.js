import React from "react"
import { ImagesContainer, Def1, Def2, Def3, ImageTitle, Title, Sub } from "./styles"
import {StaticQuery} from "gatsby"
import def1 from "../../data/def1.png"
import def2 from "../../data/def2.png"
import def3 from "../../data/def3.png"
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
                    <Title>Together,</Title>
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