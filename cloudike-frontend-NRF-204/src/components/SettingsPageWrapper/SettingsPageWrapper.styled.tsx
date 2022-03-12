import { Box, Button, Typography } from '@material-ui/core';
import { DescriptionOutlined } from '@material-ui/icons';

import styled from '@emotion/styled';

const Container = styled(Box)`
  padding: 2rem 0 1rem;
`;

const SettingsPageWrapperTitle = styled(Typography)`
  font-size: 1rem;
`;

const ManualContainer = styled(Box)`
  position: fixed;
  z-index: 1;
  bottom: 0;
  right: 0;
  overflow-x: hidden;
  padding: 1rem;
`;

const ManualButtonWrapper = styled(Button)`
  margin: auto;
  padding: 10px;
  background-color: #f2f2f2;
  height: 30px;
  border-radius: 12px;
  color: grey;
  font-size: 11px;
  font-weight: 400;
  border: 1px solid #ccc;
`;

const ManualIcon = styled(DescriptionOutlined)`
  margin-right: 2px;
  height: 0.6em;
  width: 0.6em;
`;

const ManualButtonText = styled(Typography)`
  font-size: 0.6rem;
`;

export const Styled = {
  Container,
  SettingsPageWrapperTitle,
  ManualContainer,
  ManualIcon,
  ManualButtonText,
  ManualButtonWrapper,
};
