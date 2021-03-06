import styled from 'styled-components';

export const Footer = styled.footer`
  /* Position */
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 2rem;

  /* Grid */
  display: grid;
  grid-column-gap: 0.5rem;
  align-items: center;
  justify-items: center;
  grid-template-areas: 'image link playbutton volume';
  grid-template-columns: 3rem 10rem auto 0;
  @media (min-width: ${props => props.theme.breakpoints.sm}px) {
    grid-template-columns: 3rem 10rem auto auto;
  }

  /* Styles */
  z-index: 10;
  background-color: rgba(11, 10, 21, 1);
  background-image: linear-gradient(
    to right top,
    #0b0a15,
    #151421,
    #1c1c2d,
    #24233b,
    #2c2b48
  );
  height: 4rem;
`;
