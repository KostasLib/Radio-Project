import { MdPlayArrow, MdPause, MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { IoIosVolumeHigh } from 'react-icons/io';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';

interface IProps {
  border?: boolean;
  cursor?: 'default' | 'pointer';
  size?: 'tiny' | 'small' | 'normal' | 'big' | 'enormous';
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
  cursor: ${({ cursor = 'default' }) => cursor};
  border: ${(props: IProps) => props.border && '2px solid'};
  border-radius: 50%;

  /* ! Theming  */
  color: rgb(30, 30, 30);

  /* color: white; */

  /* color: black; */
  border-color: rgb(255, 255, 255);
  background-color: rgba(255, 255, 255, 0.3);

  /* background-color: rgba(0, 0, 0, 0.6); */
`;

const calcSize = (size: IProps['size']) => {
  switch (size) {
    case 'tiny':
      return '20px';
    case 'small':
      return '30px';
    case 'normal':
      return '50px';
    case 'big':
      return '60px';
    case 'enormous':
      return '80px';
    default:
      return '50px';
  }
};

const Favorite = styled(MdFavorite)`
  color: ${props => props.theme.colors.purple};
`;
const FavoriteBorder = styled(MdFavoriteBorder)`
  color: #afafaf;
  transition: color 0.15s linear;

  &:hover {
    color: ${({ theme: { colors } }) => colors.purple};
  }
`;

export const PlayIcon: FC<IProps & { onClick?: () => void }> = props => (
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
export const FavoriteBorderIcon: FC<IProps & { isFavorite: boolean }> = props => (
  <IconButton {...props}>
    {props.isFavorite ? <Favorite /> : <FavoriteBorder />}
  </IconButton>
);
