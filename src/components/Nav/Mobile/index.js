import React, { memo, useEffect, useRef, useState } from "react"
import { animated, useSpring } from "react-spring"
import ResizeObserver from "resize-observer-polyfill"
import { useClickOutside } from "../../../utils/hooks"
import { Children, Closer, Icons, Menu, MobileNavDiv, NavLink, ParentNavLink, Parent } from "./styles"

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
    <span>
      <Icon onClick={() => setOpen(!open)} />
      {
        length > 0 ?
        <Parent onClick={() => setOpen(!open)}>{text}</Parent>
        :
        <NavLink to={url}>{text}</NavLink>
      }
      {children && (
        <Children style={{ opacity, height }} open={open}>
          <animated.div style={{ transform }} ref={ref}>
            {children}
          </animated.div>
        </Children>
      )}
    </span>
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
        <Closer onClick={toggleNav} />
        {nav.map(({node: { url, title, subNav }}) => (
          <Tree key={url} url={url || subNav[0].url} text={title} length={subNav.length}>
            {subNav.length ?
              subNav.map(item => (
                <Tree key={item.url} url={item.url} text={item.title} length={0}/>
              )): ''}
          </Tree>
        ))}
      </MobileNavDiv>
    </>
  )
}
