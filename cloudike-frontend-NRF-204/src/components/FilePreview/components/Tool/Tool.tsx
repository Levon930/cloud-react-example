import React from 'react';

import { ToolProps } from './Tool.types';

import { Styled } from './Tool.styled';

const Tool: React.FC<ToolProps> = ({ children, disabled, id, handleToolAction }) => {
  const toolActionHandler = () => {
    handleToolAction(id);
  };

  return (
    <Styled.Tool disabled={disabled} onClick={toolActionHandler} key={id}>
      {children}
    </Styled.Tool>
  );
};

export default Tool;
