import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { CarouselHeader } from '../CarouselHeader';
import { IRadio } from '../../data';
import { CardContainer } from '../RadioCard';
import { CarouselBody } from '../CarouselBody';

interface State {
  headerHovered: boolean;
  expanded: boolean;
}
interface IProps {
  data: IRadio[];
}

export class Carousel extends Component<IProps, State> {
  state = {
    headerHovered: false,
    expanded: true,
  };
  handleHeaderEnter = () => this.setState({ headerHovered: true });
  handleHeaderLeave = () => this.setState({ headerHovered: false });
  handleExpand = () => this.setState(prev => ({ expanded: !prev.expanded }));
  handleNext = () => console.log('hi')  

  render() {
    const { headerHovered, expanded } = this.state;
    return (
      <section>
        <CarouselHeader
          title="Your Favorites"
          expanded={expanded}
          showExpandIcon={headerHovered}
          onExpand={this.handleExpand}
          onHeaderEnter={this.handleHeaderEnter}
          onHeaderLeave={this.handleHeaderLeave}
          onNext={this.handleNext}
        />
        <CarouselBody data={this.props.data} display={expanded} />
      </section>
    );
  }
}