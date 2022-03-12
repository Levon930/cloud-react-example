import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';

import { FileDetailsProps } from './FileDetails.types';

import { Styled } from './FileDetails.styled';

const FileDetails: FC<FileDetailsProps> = ({ name, size, dateOfModify }) => {
  const { t } = useTranslation('filePreview');

  return (
    <>
      <Styled.InfoTitle>{t('filePreview.details')}</Styled.InfoTitle>
      <Typography>{t('filePreview.fileName')}</Typography>
      <Styled.InfoRow>{name}</Styled.InfoRow>
      <Typography>{t('filePreview.size')}</Typography>
      <Styled.InfoRow>{size}</Styled.InfoRow>
      <Typography>{t('filePreview.modifiedDay')}</Typography>
      <Styled.InfoRow>{dateOfModify}</Styled.InfoRow>
    </>
  );
};

export default FileDetails;
