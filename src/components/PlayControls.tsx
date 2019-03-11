import { MdPlayArrow, MdPause } from 'react-icons/md';
import { IoIosVolumeHigh } from 'react-icons/io';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';

// export const PlayIcon = () => <MdPlayArrow className="controls" />;
// export const PauseIcon = () => <MdPause className="controls" />;
interface IProps {
  border?: boolean;
  type?: 'light' | 'dark';
  cursor?: 'default' | 'pointer';
  size?: 'small' | 'medium' | 'big';
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
}
const IconButton = styled.button`
  /* Layout */
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  position: ${({ position = 'static' }: IProps) => position};

  /* Styles */
  font-size: ${props => calcSize(props.size)};

  /* size: 100%; */
  /* height: ${props => 100 % -calcSize(props.size)}; */
  /* width: ${props => 100 % -calcSize(props.size)}; */
  cursor: ${({ cursor = 'default' }) => cursor};
  border: ${(props: IProps) => props.border && '2px solid'};
  border-radius: 50%;

  /* ! Theming  */
  color: white;

  /* color: black; */
  border-color: rgb(255, 255, 255);
  background-color: ${props =>
    props.type === 'light' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.6)'};
`;

const calcSize = (size: IProps['size']) => {
  switch (size) {
    case 'small':
      return '40px';
    case 'medium':
      return '50px';
    case 'big':
      return '60px';
    default:
      return '50px';
  }
};

export const PlayIcon: FC<IProps> = props => (
  <IconButton {...props}>
    <MdPlayArrow />
  </IconButton>
);
export const PauseIcon: FC<IProps> = props => (
  <IconButton {...props}>
    <MdPause />
  </IconButton>
);
export const VolumeIcon: FC<IProps> = props => (
  <IconButton {...props}>
    <IoIosVolumeHigh />
  </IconButton>
);
