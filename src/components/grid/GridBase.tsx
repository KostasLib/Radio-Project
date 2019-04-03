import styled, { css } from 'styled-components';
import { truncateText } from '../../styles';
type BoxAlignment =
  | 'auto'
  | 'normal'
  | 'start'
  | 'end'
  | 'center'
  | 'stretch'
  | 'baseline';

interface IGridBaseProps {
  isHovered?: boolean;
  gutter?: boolean;
  highlightOnHover?: boolean;
  large?: boolean;
  justifyItems?: BoxAlignment; // x-axis
  alignItems?: BoxAlignment; // y-axis
  areas: [string, string, string, string, string, string];
}

export const GridBase = styled.div<IGridBaseProps>`
  width: 100%;
  height: auto;
  position: relative;  /* For pseudo-element absolute positioning. */

  /* Grid layout */
  display: grid;
  grid-template-columns: 3rem 3rem 3rem auto 8rem 6rem;
  grid-column-gap: 0.5rem;
  grid-template-areas: "${props => props.areas.join(' ')}";
  align-items: ${({ alignItems = 'center' }) => alignItems};
  justify-items: ${({ justifyItems = 'start' }) => justifyItems};

  /* Highlight On Hover */
  ${({ highlightOnHover, isHovered }) =>
    highlightOnHover &&
    css`
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        background-color: rgba(210, 210, 210, 0.2);
        z-index: -1;
        will-change: opacity;
        opacity: ${isHovered ? 1 : 0};
        transition: opacity 0.2s linear;
      }
    `}

  /* Spacing */
  ${props =>
    props.large &&
    css`
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    `}

  /* Gutter */
  ${props =>
    props.gutter &&
    css`
      &::after {
        content: '';
        position: absolute;
        left: 2rem;
        right: 2rem;
        bottom: 0;
        height: 1px;
        background-color: rgba(70, 70, 70, 0.05);
      }
    `}
`;

interface IGridItemProps {
  gridArea: string;
  alignSelf?: BoxAlignment;
  truncate?: boolean;
  shouldOverflow?: boolean;
  justifySelf?: BoxAlignment;
}

/**
 * Set justifySelf OR parent grid's justifyItems prop to 'stretch', if text should be truncated.
 * Overflow prevents truncating
 */
export const GridItem = styled.div<IGridItemProps>`
  /* Grid placement */
  grid-area: ${props => props.gridArea};
  align-self: ${({ alignSelf = 'auto' }) => alignSelf};
  justify-self: ${({ justifySelf = 'stretch' }) => justifySelf};

  /* <- Define the element's width using 'justify-self: stretch' instead
  of 'width: 100%' to truncate text on Chrome. Firefox is OK with both width and justify-self. */

  /* Text ellipsis */
  ${props => props.truncate && truncateText}

  /* Allow overflow, e.g. for animated elements. Overflowing prevents text truncating. */
  ${props =>
    props.shouldOverflow &&
    css`
      overflow: visible;
    `}
`;
