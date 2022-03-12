import React from 'react';

import { Styled } from './Footer.styled';

const RightSidebarFooter: React.FC<{ open: boolean }> = ({ open }) => {
  return (
    <Styled.Container open={open}>
      <Styled.FooterInfo />
      <Styled.FooterMore />
    </Styled.Container>
  );
};

export default RightSidebarFooter;
