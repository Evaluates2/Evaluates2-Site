import styled from "styled-components"
import { Link } from "gatsby"
import Image from 'gatsby-image'
import mediaQuery from "../../utils/mediaQuery"
import Owl from "../../assets/logo"
import { navLinkStyle } from "../Nav"

export const Img = styled(Image)`
  width: 70px !important;
  height: 70px !important;
  color: #f0f;
  transition: ease-in-out;
  margin-bottom: 0.3em;
  :hover {
    transform: scale(1.05);
  }
`

export const HeaderContainer = styled.header`
  padding: 20px;
  position: fixed;
  width: 100vw;
  background: ${props => props.theme.darkBlue};
  display: grid;
  grid-gap: calc(1em + 1vw);
  align-items: center;
  justify-items: center;
  grid-template-areas: "nav title social search";
  grid-template-columns: auto 1fr auto auto;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0);
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  will-change: background;
  ${mediaQuery.minNetbook} {
    grid-template-areas: "title nav social search";
  }
`

export const SiteTitle = styled(Link)`
  grid-area: title;
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  grid-gap: 1em;
  color: white;
  transition: ${props => props.theme.shortTrans};
  ${mediaQuery.minTablet} {
    grid-auto-flow: column;
  }
  div {
    font-size: 30px;
  }
`

export const Logo = styled(Owl)`
  height: 3em;
  width: 3em;
  object-position: top;
  border-radius: 50%;
  background: white;
  padding: 0.1em;
`
