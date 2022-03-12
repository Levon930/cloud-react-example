import React from 'react';

import { PopoverProps } from './Popover.types';

import { Styled } from './Popover.styled';

const Popover: React.FC<PopoverProps> = ({
  margin = { left: '0', top: '0', right: '0', bottom: '0' },
  anchorEl,
  onClose,
  isOpen,
  children,
}) => (
  <Styled.PopperWrapper margin={margin} anchorEl={anchorEl} open={isOpen} onClose={onClose}>
    <Styled.PaperWrapper>{children}</Styled.PaperWrapper>
  </Styled.PopperWrapper>
);

export default Popover;
