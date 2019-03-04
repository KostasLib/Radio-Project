import React from 'react';
import { PlayIcon, PauseIcon, VolumeIcon } from './PlayControls';
import styled, { css } from 'styled-components';
import { RadioTitle } from './styled/RadioTitle';
import { RadioImage } from './styled/RadioImage';
import { RadioCard } from './styled/RadioCard';
import { Overlay } from './styled/OverLay';
import { IRadio } from '../data';

interface ICProps {
  radio: IRadio;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
interface IState {
  hovered: boolean;
  active: boolean;
}
export class CardContainer extends React.Component<ICProps, IState> {
  readonly state: IState = {
    hovered: false,
    active: false,
  };
  onMouseEnter = () => this.setState({ hovered: true });
  onMouseLeave = () => this.setState({ hovered: false });
  onClick = () => this.setState({ active: !this.state.active });
  img =
    'http://www.music892.gr/wp-content/uploads/2017/09/cropped-MASTER_MUSIC_LOGO-2.png';

  render() {
    const {
      radio: { image, name },
    } = this.props;
    return (
      <Center>
        <Card
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          onClick={this.props.onClick || this.onClick}
          showPlay={this.state.hovered && !this.state.active}
          showPause={this.state.hovered && this.state.active}
          showVolume={!this.state.hovered && this.state.active}
          hovered={this.state.hovered}
          imageSource={image}
          title={name}
        />
      </Center>
    );
  }
}
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

interface IProps {
  onMouseEnter?: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  showPlay?: boolean;
  showVolume?: boolean;
  showPause?: boolean;
  backdrop?: boolean;
  hovered?: boolean;
  imageSource: string;
  title: string;
}
const Card = ({
  onClick,
  onMouseEnter,
  onMouseLeave,
  showPause,
  showPlay,
  hovered,
  imageSource,
  showVolume,
  title,
}: IProps) => (
  <>
    <RadioCard
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      // shadowColor="rgba(161, 243, 28, 0.1)"
    >
      <RadioImage
        blur={hovered}
        src={imageSource} /* bgColor={'rgba(152, 230, 27, 0.4)'}  */
      />
      {showPlay && <PlayIcon border={true} />}
      {showPause && <PauseIcon />}
      {showVolume && <VolumeIcon />}
      <Overlay show={!!hovered} type="light" />
    </RadioCard>
    <RadioTitle>{title}</RadioTitle>
  </>
);
