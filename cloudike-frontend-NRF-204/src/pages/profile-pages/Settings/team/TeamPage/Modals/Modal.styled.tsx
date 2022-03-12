import { Box, Container } from '@material-ui/core';

import { Input } from '@components';
import styled from '@emotion/styled';

const ButtonContainer = styled(Container)`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  padding: 0;
`;

const ModalContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 37rem;
  padding: 0;
`;

const ModalFromContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
`;

const ModalDescription = styled(Box)`
  margin: 1rem 0;
`;

const IPInput = styled(Input)`
  margin-right: 0.9rem;
`;

// const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
//   <ReusableButton {...props} color="primary" variant="contained">
//     {children}
//   </ReusableButton>
// );
//
// const CancelButton: React.FC<ButtonProps> = ({ children, ...props }) => (
//   <ReusableButton {...props} color="secondary" variant="outlined">
//     {children}
//   </ReusableButton>
// );

export const Styled = {
  ButtonContainer,
  ModalContainer,
  ModalFromContainer,
  ModalDescription,
  IPInput,
};
