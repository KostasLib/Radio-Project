import styled from 'styled-components';

interface IScrollProps {
  scroll: boolean;
  display: boolean;
}

export const HorizontalList = styled.ul`
  overflow-y: hidden;
  overflow-x: ${(props: IScrollProps) => (props.scroll ? 'scroll' : 'hidden')};
  display: ${props => (props.display ? 'flex' : 'none')};
  background-color: none;

  &::-webkit-scrollbar {
    height: 9px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 1rem;
    background: rgba(0, 0, 0, 0.1);

    &:hover {
      border: 1px solid #ccc;
    }
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(30, 30, 30, 0.2);

    &:hover {
      background: rgba(30, 30, 30, 0.3);
      height: 20px;
    }

    &:active {
      background: rgba(30, 30, 30, 0.4);
    }
  }
`;
