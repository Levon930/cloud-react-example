import { Box } from '@material-ui/core';

import styled from '@emotion/styled';

const DropzoneWrapper = styled(Box)`
  width: 500px;
  & .dropzone {
    width: 100%;
    border: 1px solid #ccc;
    min-height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .dropzone-paragraph {
    margin: 0;
  }
  & .dropzone-preview-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    justify-content: center;
    margin: 0;
  }
  & .dropzone-preview-items {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .dropzone-preview-items button {
    top: 5px;
    right: -20px;
  }
`;

export const Styled = {
  DropzoneWrapper,
};
