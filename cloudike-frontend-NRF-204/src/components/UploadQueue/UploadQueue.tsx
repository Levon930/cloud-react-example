import React, { useState } from 'react';
import { Box, Divider } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { Extension, ExtentionFileIcon } from '@components/Card/ExpandedFile';
import { CancelUploadIcon, StatusOkayIcon } from '@components/SvgComponents';
import { toaster } from '@helpers';
import { Status } from './UploadQueue.types';

import { Styled } from './UploadQueue.styled';

/**
 * move to documents page
 *
 */
const UploadQueue: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [openGeneral, setOpenGeneral] = useState(true);

  const files = [
    { id: 1, type: Extension.jpg, name: 'file1', status: Status.okay },
    { id: 2, type: Extension.png, name: 'file2', status: Status.loading },
    { id: 3, type: Extension.doc, name: 'file3', status: Status.loading },
  ];

  const cancelUpload = (id: number) => {
    toaster(`cancel upload function is not realized, file id ${id}`, 'error');
  };

  return (
    <>
      {openGeneral && (
        <Styled.Container>
          <Styled.Header>
            <Styled.HeaderTitle>File upload</Styled.HeaderTitle>
            <Styled.ButtonsContainer>
              {open ? (
                <KeyboardArrowDownIcon
                  color="disabled"
                  onClick={() => {
                    setOpen(false);
                  }}
                />
              ) : (
                <KeyboardArrowUpIcon
                  color="disabled"
                  onClick={() => {
                    setOpen(true);
                  }}
                />
              )}
              <CloseIcon
                color="disabled"
                onClick={() => {
                  setOpenGeneral(false);
                }}
              />
            </Styled.ButtonsContainer>
          </Styled.Header>
          <Styled.FilesContainer open={open}>
            {files.map((file) => {
              return (
                <Box key={file.name}>
                  <Styled.FileRow>
                    <Styled.FlexBox>
                      <Styled.PredefinedIcon>
                        <ExtentionFileIcon extension={file.type} />
                      </Styled.PredefinedIcon>
                      <Styled.FileName>{`${file.name}.${file.type}`}</Styled.FileName>
                    </Styled.FlexBox>
                    <Styled.IconContainer>
                      {file.status === Status.okay ? (
                        <StatusOkayIcon />
                      ) : (
                        <Box onClick={() => cancelUpload(file.id)}>
                          <CancelUploadIcon />
                        </Box>
                      )}
                    </Styled.IconContainer>
                  </Styled.FileRow>
                  <Divider />
                </Box>
              );
            })}
          </Styled.FilesContainer>
        </Styled.Container>
      )}
    </>
  );
};

export default UploadQueue;
