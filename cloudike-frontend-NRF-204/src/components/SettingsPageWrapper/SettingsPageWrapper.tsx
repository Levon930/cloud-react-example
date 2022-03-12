import React from 'react';
import { IconButton } from '@material-ui/core';
import { MoreHoriz } from '@material-ui/icons';

import { SettingsPageWrapperProps } from './SettingsPageWrapper.types';

import { Styled } from './SettingsPageWrapper.styled';

/**
 * rewrite component - https://yt.cloudike.io/issue/NRF-214
 */
const SettingsPageWrapper: React.FC<SettingsPageWrapperProps> = ({ title, children }) => (
  <Styled.Container>
    <Styled.SettingsPageWrapperTitle>{title}</Styled.SettingsPageWrapperTitle>
    {children}
    <footer>
      <Styled.ManualContainer>
        <Styled.ManualButtonWrapper variant="contained" color="default">
          <Styled.ManualIcon />
          <Styled.ManualButtonText>User manaual</Styled.ManualButtonText>
        </Styled.ManualButtonWrapper>
        <IconButton>
          <MoreHoriz color="disabled" />
        </IconButton>
      </Styled.ManualContainer>
    </footer>
  </Styled.Container>
);
export default SettingsPageWrapper;
