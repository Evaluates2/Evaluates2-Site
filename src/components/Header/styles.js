import styled from "styled-components";
import { Link } from "gatsby"
import Image from 'gatsby-image'
import mediaQuery from "../../utils/mediaQuery"
import Owl from "../../assets/logo"
import { navLinkStyle } from "../Nav"

export const Img = styled(Image)`
  width: 70px !important;
  height: 70px !important;
  color: #0fdde8;
  transition: ease-in-out;
  margin-bottom: 0.3em;
  transform: rotate(-90deg);
  ${mediaQuery.maxNetbook} {
    width: 40px !important;
    height: 40px !important;
  }
`
export const Label = styled.div`
  ${mediaQuery.maxNetbook} {
    font-size: 20px !important;
  }
`

export const HeaderContainer = styled.header`  
  transition: all 0.5s linear;
  padding: 20px;
  position: fixed;
  width: 100%;
  background: ${props => props.theme.darkBlue};
  display: grid;
  grid-gap: calc(1em + 1vw);

  align-items: center;
  justify-items: center;
  grid-template-areas: "nav title social search";
  grid-template-columns: auto 1fr auto auto;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0);
  ${mediaQuery.minNetbook} {
    grid-template-areas: "title nav social search";
  }
  ${mediaQuery.maxNetbook} {
    padding: 10px;
  }
`

export const SiteTitle = styled(Link)`
  grid-area: title;
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  grid-gap: 1em;
  color: white;
  background-color: transparent;
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
