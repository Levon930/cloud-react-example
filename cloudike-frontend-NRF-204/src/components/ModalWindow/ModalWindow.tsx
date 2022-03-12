import React from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, Fade, Typography } from '@material-ui/core';

import { ModalWindowProps } from './ModalWindow.types';

import { Styled } from './ModalWindow.styled';

const ModalWindow: React.FC<ModalWindowProps> = React.memo(
  ({ isOpen, closeModal, title, children }) => {
    const domEl = document.getElementById('modal-root');

    if (!domEl) {
      return null;
    }

    return createPortal(
      <Styled.ModalWindow
        open={isOpen}
        onClose={closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <Styled.Paper>
            <Typography variant="h6" component="h1" id="transition-modal-title">
              {title}
            </Typography>
            {children}
            <Styled.CloseButton aria-label="close" onClick={closeModal} />
          </Styled.Paper>
        </Fade>
      </Styled.ModalWindow>,
      domEl,
    );
  },
);

export default ModalWindow;
