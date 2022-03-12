import React from 'react';

import { PlanIconProps } from '@components/PlanIconWrapper/PlanIconWrapper.types';

import { Styled } from './PlanIconWrapper.styled';

/**
 * @deprecated
 * remove component
 * add styles where component need
 */
const PlanIconWrapper: React.FC<PlanIconProps> = ({ children, fill }) => (
  <Styled.IconWrapper fill={fill}>{children}</Styled.IconWrapper>
);

export default PlanIconWrapper;
