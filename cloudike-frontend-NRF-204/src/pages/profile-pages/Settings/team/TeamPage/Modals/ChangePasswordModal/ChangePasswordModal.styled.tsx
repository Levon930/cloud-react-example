import { Box } from '@material-ui/core';

import { Input as OurInput } from '@components';
import styled from '@emotion/styled';
import { InputProps } from './ChangePasswordModal.types';

const ModalFormWrapper = styled(Box)`
  width: 400px;
  padding: 5px;
`;

const StyledInput = styled(OurInput)`
  width: 350px;
`;

const Input: React.FC<InputProps> = (props) => (
  <StyledInput {...props} size="small" new-password="true" variant="outlined" />
);

const ButtonsWrapper = styled(Box)`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
`;

export const Styled = {
  ModalFormWrapper,
  Input,
  ButtonsWrapper,
};
