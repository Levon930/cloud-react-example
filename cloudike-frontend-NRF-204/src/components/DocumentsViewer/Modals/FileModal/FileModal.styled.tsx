import { Modal as MuiModal, ModalProps } from '@material-ui/core';

import styled from '@emotion/styled';

const StyledModal = styled(MuiModal)`
  width: 100%;
  height: 100%;
  > div {
    background-color: ${({ theme }) => theme.palette.common.white};
  }
`;

const Modal: React.FC<ModalProps> = ({ children, ...props }) => (
  <StyledModal {...props}>{children}</StyledModal>
);

export const Styled = {
  Modal,
};
