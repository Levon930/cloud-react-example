import React from 'react';
import { Box } from '@material-ui/core';

import usePublicLinkExpirationTranslation from './usePublicLinkExpirationTranslation';

import { assets, Styled } from '../PublicLink.styled';

const PublicLinkExpiration = () => {
  const { expirationAlt, expirationTitle, expirationText } = usePublicLinkExpirationTranslation();

  return (
    <Styled.ExpirationWrapper>
      <Box>
        <img src={assets.expiration} alt={expirationAlt} />
        <Styled.ExpirationTitle>{expirationTitle}</Styled.ExpirationTitle>
        <Styled.ExpirationText>{expirationText}</Styled.ExpirationText>
      </Box>
    </Styled.ExpirationWrapper>
  );
};

export default PublicLinkExpiration;
