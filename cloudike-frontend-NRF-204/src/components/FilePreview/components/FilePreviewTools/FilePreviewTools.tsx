import React from 'react';
import { Button, IconButton } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';

import { fileSvgs, Tool } from '@components';
import { FilePreviewToolsProps } from './FilePreviewTools.types';

import { Styled } from './FilePreviewTools.styled';

/**
 * @deprecated rewrite
 * use - https://material-ui.com/ru/components/tabs/#vertical-tabs
 */
const FilePreviewTools: React.FC<FilePreviewToolsProps> = ({
  setActiveTool,
  isInfoOpen,
  infoBoxType,
  setIsInfoOpen,
  activeTool,
  handleToolAction,
  checkIfIconDisabled,
}) => {
  const handleInfoBoxToggle = () => {
    setActiveTool(!isInfoOpen ? infoBoxType : null);
    setIsInfoOpen(!isInfoOpen);
  };

  return (
    <Styled.ToolsBox item>
      <Styled.ToolsButton>
        <Button onClick={handleInfoBoxToggle}>
          {isInfoOpen ? <ArrowForwardIos /> : <ArrowBackIos />}
        </Button>
      </Styled.ToolsButton>
      <Styled.ToolsContainer>
        {fileSvgs.map(({ Component, title, id }) => {
          return (
            <Tool
              disabled={checkIfIconDisabled(title)}
              handleToolAction={handleToolAction}
              key={id}
              id={id}
            >
              <Styled.Tooltip title={title} placement="left" arrow>
                <IconButton>
                  <Component isActive={!!(activeTool && activeTool === title) && isInfoOpen} />
                </IconButton>
              </Styled.Tooltip>
            </Tool>
          );
        })}
      </Styled.ToolsContainer>
    </Styled.ToolsBox>
  );
};

export default FilePreviewTools;
