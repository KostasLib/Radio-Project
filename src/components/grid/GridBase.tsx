import styled, { css } from 'styled-components';
type BoxAlignment =
  | 'auto'
  | 'normal'
  | 'start'
  | 'end'
  | 'center'
  | 'stretch'
  | 'baseline';

interface IGridBaseProps {
  gutter?: boolean;
  highlightOnHover?: boolean;
  spacing?: boolean;
  justifyItems?: BoxAlignment; // x-axis
  alignItems?: BoxAlignment; // y-axis
  areas: [string, string, string, string, string, string];
}

export const GridBase = styled.div`
  width: 100%;
  height: auto;
  position: relative;

  /* Grid layout */
  display: grid;
  grid-template-columns: 3rem 3rem 3rem auto 8rem 6rem;
  grid-column-gap: 0.5rem;
  grid-template-areas: "${(props: IGridBaseProps) => props.areas.join(' ')}";
  align-items: ${({ alignItems = 'center' }) => alignItems};
  justify-items: ${({ justifyItems = 'start' }) => justifyItems};

  /* Highlight On Hover */
  ${props =>
    props.highlightOnHover &&
    css`
      border-radius: 10px;
      transition: background-color 0.1s linear;
      &:hover {
        background-color: rgba(210, 210, 210, 0.2);
      }
    `}

  /* Spacing */
  ${props =>
    props.spacing &&
    css`
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    `}

  /* Gutter */
  ${props =>
    props.gutter &&
    css`
      &::before {
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
  justifySelf?: BoxAlignment;
}
export const GridItem = styled.div`
  grid-area: ${(props: IGridItemProps) => props.gridArea};
  align-self: ${({ alignSelf = 'auto' }) => alignSelf};
  justify-self: ${({ justifySelf = 'auto' }) => justifySelf};
`;
