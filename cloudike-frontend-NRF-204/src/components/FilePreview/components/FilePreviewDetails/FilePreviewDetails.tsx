import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import { useReactiveVar } from '@apollo/client';
import { documentVar } from '@store';
import { FilePreviewDetailsProps } from './FilePreviewDetails.types';

import { Styled } from './FilePreviewDetails.styled';

const FilePreviewDetails: React.FC<FilePreviewDetailsProps> = ({
  downloadElement,
  handleShare,
}) => {
  const { name = '' } = useReactiveVar(documentVar) || {};
  const { path = '' } = useReactiveVar(documentVar) || {};
  const { t } = useTranslation('filePreview');

  return (
    <Styled.FileContent>
      <Styled.FileTitle>{name}</Styled.FileTitle>
      <Styled.FileImage>
        <img src="/assets/filePreviewImg.png" alt={t('filePreview.img')} />
      </Styled.FileImage>
      <Typography>{t('filePreview.upload')}</Typography>
      <Styled.ButtonsWrapper container>
        <Styled.DownloadButton>
          <Link to={path} target="_blank" download ref={downloadElement}>
            {t('filePreview.download')}
          </Link>
        </Styled.DownloadButton>
        <Styled.ShareButton onClick={handleShare}>{t('filePreview.share')}</Styled.ShareButton>
      </Styled.ButtonsWrapper>
    </Styled.FileContent>
  );
};

export default FilePreviewDetails;
