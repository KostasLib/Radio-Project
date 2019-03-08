import { FlexBasis } from './FlexBasis';
import React, { FC, ComponentProps } from 'react';

type Props = Partial<ComponentProps<typeof FlexBasis>>;

export const Row: FC<Props> = props => <FlexBasis flexDirection="row" {...props} />;
