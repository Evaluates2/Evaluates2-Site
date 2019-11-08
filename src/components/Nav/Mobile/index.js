import React, { memo, useEffect, useRef, useState } from "react"
import { animated, useSpring } from "react-spring"
import ResizeObserver from "resize-observer-polyfill"
import { useClickOutside } from "../../../utils/hooks"

import styled, { css } from "styled-components"
import { Close } from "styled-icons/material/Close"
import { KeyboardArrowDown as More } from "styled-icons/material/KeyboardArrowDown"
import { KeyboardArrowRight as Arrow } from "styled-icons/material/KeyboardArrowRight"
import { KeyboardArrowUp as Less } from "styled-icons/material/KeyboardArrowUp"
import { ThMenu } from "styled-icons/typicons/ThMenu"
import mediaQuery from "../../../utils/mediaQuery"
import { NavLink, ParentNavLink } from "../styles"


const iconCss = css`
  width: 1em;
  margin-right: 0.2em;
  cursor: pointer;
  vertical-align: -0.15em;
`

export const Icons = {
  More: styled(Arrow)`
    ${iconCss};
    height: 25px;
  `,
  Less: styled(More)`
    ${iconCss};
    height: 25px;
  `,
  Arrow: styled(Arrow)`
    ${iconCss};
    cursor: default !important;
    height: 25px;
  `,
}

export const Parent = styled.div`
  margin: 0 18px;
  opacity: .65;
  -webkit-transition: opacity .2s ease;
  transition: opacity .2s ease;
  font-size: 15px;
  font-weight: 500;
  color: white;
  display: inline;
  :hover {
    color: white;
    opacity: 1;
    cursor: pointer !important;
  }
`

export const MobileNavDiv = styled.nav`

  div#mobile-nav {

  position: fixed;
  z-index: 1; /* places nav on top of search and social icon in header */
  top: 0;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  height: 120vh;
  background: rgba(0, 0, 0, 0.85);
  padding: calc(12px + 4vw) calc(12px + 4vw) calc(12px + 4vw) calc(6px + 2vw);
  box-sizing: border-box;
  font-size: calc(12px + 4vw);
  text-align: left;
  color: white;
  right: 100%;
  display: grid;
  min-width: 20vw;
  grid-auto-columns: max-content;
  grid-auto-rows: max-content;
  transform: translate(${props => (props.open ? `100%` : `0`)});
  transition: ${props => props.theme.shortTrans};
  ${mediaQuery.maxNetbook} {
    max-width: 13em;
  }
  ${mediaQuery.maxPhone} {
    justify-content: center;
    width: 100%;
    max-width: initial;
  }
  }
`

export const Children = styled(animated.div)`
  will-change: transform, opacity, height;
  margin-top: ${props => props.open ? `15px` : '0px'};
  margin-left: 19px;
  padding: 0 15px ${props => props.open ? '15px' : '0px'} 25px;
  border-left: thin dashed white;
  padding-bottom: ${props => props.open && `0.6em`};
  > div {
    display: grid;
  }
`

export const Menu = styled(NavLink).attrs({
  size: `1em`,
  as: ThMenu,
})`
  cursor: pointer;
  transform: scale(1.7, 1.3);
  margin: 0 0.3em;
`

export const Closer = styled(Close)`
  position: absolute;
  top: 0.8em;
  right: 1em;
  width: 1.5em;
  ${mediaQuery.minPhone} {
    display: none;
  }
`

const MenuItemRow = styled.div`

    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    display: flex;

    margin: 15px 0;
    /* max-height: ${props => props.open ? '1000px' : '30px'}; */

`;

const MenuChildrenColumn = styled.div`

    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    display: flex;

`;


export const useSize = (ref, quantity) => {
  const [size, setSize] = useState(0)
  // useState for performance, otherwise ResizeObserver will be invoked on every rerender
  const [observer] = useState(
    new ResizeObserver(([entry]) => setSize(entry.contentRect[quantity]))
  )
  useEffect(() => {
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return size
}

const Tree = memo(({ text, url, children, length }) => {
  const ref = useRef()
  const [open, setOpen] = useState(false)
  const treeHeight = useSize(ref, `height`)
  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: `translateX(1em)` },
    to: {
      height: open ? treeHeight : 0,
      opacity: open ? 1 : 0,
      transform: `translateX(${open ? 0 : 1}em)`,
    },
  })
  const Icon = Icons[children ? (open ? `Less` : `More`) : `Arrow`]
  return (
    <MenuItemRow open={open}>
      <span>

        <Icon onClick={() => setOpen(!open)} />

        {
          length > 0 ?
            <Parent onClick={() => setOpen(!open)}>{text}</Parent>
            :
            // <MenuChildrenColumn>
            <NavLink to={url}>{text}</NavLink>
          // </MenuChildrenColumn>
        }
        {children && (
          <Children style={{ opacity, height }} open={open}>
            <animated.div style={{ transform }} ref={ref}>
              {children}
            </animated.div>
          </Children>
        )}
      </span>
    </MenuItemRow>
  )
})

export default function MobileNav({ nav }) {
  const ref = useRef()
  const [open, setOpen] = useState(false)
  const toggleNav = () => setOpen(!open)
  useClickOutside(ref, () => open && setOpen(false))
  return (
    <>
      <Menu onClick={toggleNav} />
      <MobileNavDiv ref={ref} open={open} onScroll={e => e.preventDefault()}>
        <div id="mobile-nav">

          <Closer onClick={toggleNav} />
          {nav.map(({ node: { url, title, subNav } }) => (
            <Tree key={url} url={url || subNav[0].url} text={title} length={subNav.length}>
              {subNav.length ?
                subNav.map(item => (
                  <Tree key={item.url} url={item.url} text={item.title} length={0} />
                )) : ''}
            </Tree>
          ))}
        </div>
      </MobileNavDiv>
    </>
  )
}
