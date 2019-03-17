import React, { ReactNode, FC } from 'react';
import { CardMedia } from './CardMedia';
import { Image } from '../styled/Image';
import { PlayIcon, PauseIcon, VolumeIcon } from '../IconButtons';
import { Overlay } from '../styled/OverLay';
import { CardContent } from './CardContent';
import { Title } from './Title';
import { MdMusicNote } from 'react-icons/md';
import { Placeholder } from '../styled/Placeholder';

interface IProps {
  onMouseEnter?: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  onImageLoad: () => any;
  showPlay?: boolean;
  showVolume?: boolean;
  showPause?: boolean;
  backdrop?: boolean;
  hovered?: boolean;
  imageSource: string;
  loaded?: boolean;
  title?: ReactNode;
}

// TODO: Pause Icon should only be visible when the radio is active AND the Icon Button is hovered.
export const View: FC<IProps> = ({
  onClick,
  onMouseEnter,
  onMouseLeave,
  showPause,
  showPlay,
  hovered,
  imageSource,
  showVolume,
  title,
  loaded,
  onImageLoad,
  ...rest
}) => (
  <div>
    <CardMedia
      {...rest}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      // shadowColor="rgba(161, 243, 28, 0.1)"
    >
      {/* TODO: Add PH only on first load (lift state up). Might still keep the image fading effect using local state. Looks cool. */}
      <Placeholder transitionOut={loaded} gradient={true}>
        <MdMusicNote fontSize="3rem" style={{ size: '5rem', margin: 'auto' }} />
      </Placeholder>
      <Image
        blur={hovered}
        src={imageSource}
        onLoad={onImageLoad}
        loaded={loaded}

        /* bgColor={'rgba(152, 230, 27, 0.4)'}  */
      />
      {showPlay && <PlayIcon border={true} position="absolute" type="light" />}
      {showPause && <PauseIcon border={true} position="absolute" type="light" />}
      {showVolume && <VolumeIcon position="absolute" type="dark" />}
      <Overlay show={!!hovered} type="light" />
    </CardMedia>
    {title && (
      <CardContent alignItems="flex-start">
        <Title>{title}</Title>
      </CardContent>
    )}
  </div>
);
