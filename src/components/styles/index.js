import { css } from "styled-components"

export { ButtonGroup } from "./ButtonGroup"
export { Grid } from "./Grid"
export { Caption } from "./Caption"

export const fadeInOnHoverParent = parent => css`
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  ${parent}:hover & {
    opacity: 1;
    visibility: visible;
    pointer-events: initial;
  }
`
