import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const navLinkStyle = css`
  margin: 0 18px;
  opacity: .65;
  -webkit-transition: opacity .2s ease;
  transition: opacity .2s ease;
  font-size: 15px;
  font-weight: 500;
  color: white;
  transition: ${props => props.theme.shortTrans};
  &.active {
    color: ${props => props.theme.yellowgreen};
  }
  :hover {
    color: white;
    opacity: 1;
  }
`

const span = css`
  grid-column: 1/-1;
  border-top: 1px solid white;
  padding-top: 0.2em;
`

export const NavLink = styled(Link).attrs({
  activeClassName: `active`,
  partiallyActive: true,
})`
  ${navLinkStyle};
  ${props => props.span && span};
`

export const ParentNavLink = styled(Link).attrs({
  activeClassName: `paactive`,
  partiallyActive: true,
})`
  ${navLinkStyle};
  ${props => props.span && span};
`
