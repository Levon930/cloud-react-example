import React from 'react';

import { Popover } from '@components/Popover';
import { InfoPopoverProps } from './InfoPopover.types';

import { Styled } from './InfoPopover.styled';

const InfoPopover: React.FC<InfoPopoverProps> = ({ onClose, isOpen, anchorEl, info = '' }) => {
  return (
    <Popover
      margin={{ left: '50px', top: '0', right: '0', bottom: '0' }}
      anchorEl={anchorEl}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Styled.TextWrapper>{info}</Styled.TextWrapper>
    </Popover>
  );
};

export default InfoPopover;
