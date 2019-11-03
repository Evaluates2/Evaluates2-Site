import styled from "styled-components"
import { ArrowDownCircle as Down } from "styled-icons/feather/ArrowDownCircle"
import { ArrowUpCircle as Up } from "styled-icons/feather/ArrowUpCircle"

export const Arrow = styled(Down).attrs(props => ({
  as: props.direction === `up` && Up,
}))`
  z-index: 10;
  background: ${props => props.theme.lightBlue} !important;
  border-radius: 50% !important;
  padding: 0 !important;
  color: white;
  transition: ${props => props.theme.shortTrans};
  position: absolute;
  bottom: calc(70px + 0.5vw);
  margin-right: calc(10px + 1vw);
  /* right: calc(50vw - ${props => props.size} / 2); */
  opacity: ${props => (props.show ? 1 : 0)};
  visibility: ${props => (props.show ? `visible` : `hidden`)};
  /* width: ${props => props.size};
  height: ${props => props.size}; */

  width: calc(30px + 2vw);
  height: calc(30px + 2vw);


  cursor: pointer;
  :hover {
    transform: scale(1.15);
    background: ${props => props.theme.orange};
  }
`
