import styled from "styled-components";
import { Link } from "gatsby"
import Image from 'gatsby-image'
import mediaQuery from "../../utils/mediaQuery"
import Owl from "../../assets/logo"


export const Img = styled(Image)`
  width: 70px;
  height: 70px;
  color: #0fdde8;
  transition: ease-in-out;
  margin-bottom: 0.3em;
  transform: rotate(-90deg);
  ${mediaQuery.maxNetbook} {
    width: 40px;
    height: 40px;
  }
`

export const Label = styled.div`
  color: white;

  line-height: 25px;
  ${mediaQuery.maxNetbook} {
    font-size: 20px;
  }
`

export const HeaderContainer = styled.header`  
  :not(.transparent) {
    background-color: ${props => props.theme.darkBlue};

  }
  .transparent {
    background-color: rgba(0,0,0,0);
  }
  
  transition: top 1s linear;
  transition: opacity 0 linear;
  padding: 20px;
  position: fixed;
  width: 100%;
  display: grid;
  grid-gap: calc(10px);
  align-items: center;
  justify-items: center;
  grid-template-areas: "nav title social search";
  grid-template-columns: auto 1fr auto auto;
  font-weight: bold;
  ${mediaQuery.minNetbook} {
    grid-template-areas: "title nav social search";
  };
  


`

export const SiteTitle = styled(Link)`
  grid-area: title;
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  gap: 19px;
  color: white;
  background-color: transparent;
  transition: ${props => props.theme.shortTrans};
  ${mediaQuery.minTablet} {
    grid-auto-flow: column;
  }
  div {
    font-size: 30px;
  }

  a {
    max-height: 250px;
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
