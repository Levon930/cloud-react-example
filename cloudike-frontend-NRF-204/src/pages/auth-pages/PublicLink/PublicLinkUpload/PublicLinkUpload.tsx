import { Box } from '@material-ui/core';

import usePublicLinkUploadTranslation from './usePublicLinkUploadTranslation';

import { assets, Styled } from '../PublicLink.styled';

const PublicLinkUpload = () => {
  const { upload, uploadComplete } = usePublicLinkUploadTranslation();

  return (
    <Styled.UploadWrapper>
      <Box>
        <img src={assets.upload} alt={upload} />
        <Styled.UploadTitle>{uploadComplete}</Styled.UploadTitle>
      </Box>
    </Styled.UploadWrapper>
  );
};
export default PublicLinkUpload;
