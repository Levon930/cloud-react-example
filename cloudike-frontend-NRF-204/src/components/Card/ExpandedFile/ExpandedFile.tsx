import React from 'react';

import { FolderIcon } from '@components/SvgComponents';
import { ExpandedFile as ExpandedFileType } from './ExpandedFile.types';
import ExtentionFileIcon from './ExtensionFileIcon';

import { Styled } from './ExpandedFile.styled';

/**
 * @deprecated rewrite in refactoring time
 */
const ExpandedFile: React.FC<ExpandedFileType> = ({
  extension,
  title,
  folderTitle,
  name,
  withCheckbox,
  handleChange,
  checked,
  handleOpen,
}) => {
  return (
    <Styled.CardContainer>
      {withCheckbox && <Styled.Checkbox checked={checked} onChange={() => handleChange(name)} />}
      <Styled.PredefinedIcon onClick={handleOpen}>
        <ExtentionFileIcon extension={extension} />
      </Styled.PredefinedIcon>
      <Styled.FlexColumnBox>
        <Styled.TitleBox>{title}</Styled.TitleBox>
        <Styled.FlexBox>
          <Styled.FolderIcon>
            <FolderIcon />
          </Styled.FolderIcon>
          <Styled.FolderNameBox>{folderTitle}</Styled.FolderNameBox>
        </Styled.FlexBox>
      </Styled.FlexColumnBox>
    </Styled.CardContainer>
  );
};

export default ExpandedFile;
