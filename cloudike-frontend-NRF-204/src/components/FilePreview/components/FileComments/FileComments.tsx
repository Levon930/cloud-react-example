import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { FileCommentsProps } from './FileComments.types';

import { Styled } from './FileComments.styled';

const FileComments: FC<FileCommentsProps> = () => {
  const { t } = useTranslation('filePreview');

  return (
    <>
      <Styled.InfoTitle>{t('filePreview.comment')}</Styled.InfoTitle>
      {t('filePreview.comingSoon')}
    </>
  );
};

export default FileComments;
