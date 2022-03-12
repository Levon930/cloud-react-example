import React from 'react';
import { Box } from '@material-ui/core';

import { PublicLinkEmptyProps } from './PublicLinkEmpty.types';
import usePublicLinkEmptyTranslation from './usePublicLinkEmptyTranslation';

import { Styled } from '../PublicLink.styled';

const PublicLinkEmpty: React.FC<PublicLinkEmptyProps> = ({ download, folderName }) => {
  const { emptyFolder, uploadLink, uploadNotification } = usePublicLinkEmptyTranslation();

  return (
    <>
      <Box>
        <h1>{folderName}</h1>
      </Box>
      <Styled.EmptyContainer>
        <Styled.Emptyimage />
        <Styled.EmptyMsg>{emptyFolder}</Styled.EmptyMsg>
        {!download ? (
          <Styled.EmptyTextWrapper>
            <Styled.ExpirationText>{uploadLink}</Styled.ExpirationText>
            <Styled.ExpirationText>{uploadNotification}</Styled.ExpirationText>
          </Styled.EmptyTextWrapper>
        ) : null}
      </Styled.EmptyContainer>
    </>
  );
};

export default PublicLinkEmpty;
