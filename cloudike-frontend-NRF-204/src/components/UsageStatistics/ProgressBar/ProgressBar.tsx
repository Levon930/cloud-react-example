import React from 'react';
import { LinearProgress, Typography } from '@material-ui/core';

import { ProgressBarProps } from './ProgressBar.types';

import { Styled } from './ProgressBar.styled';

const ProgressBar: React.FC<ProgressBarProps> = ({ title, usage, total, value, ImgComponent }) => (
  <Styled.Container>
    <Styled.ProgressText>
      <Styled.ImageWrapper>
        <ImgComponent />
      </Styled.ImageWrapper>
      <Styled.ProgressTitle>{title}</Styled.ProgressTitle>
      <Styled.progressTextInner>
        <Typography>{`${usage}`}</Typography>
        <Typography>{`/ ${total}`}</Typography>
      </Styled.progressTextInner>
    </Styled.ProgressText>
    <Styled.ProgressBarWrapper>
      <LinearProgress variant="determinate" value={value} />
    </Styled.ProgressBarWrapper>
  </Styled.Container>
);
export default ProgressBar;
