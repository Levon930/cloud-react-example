import React from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageSelect } from '@components';
import { AuthLayoutStyled } from '@layouts/AuthLayout';

import { Styled } from './DeleteAccountComplete.styled';

const DeleteAccountComplete: React.FC = () => {
  const { t } = useTranslation('deleteAccountModal');

  return (
    <>
      <AuthLayoutStyled.AuthHeader>
        <LanguageSelect />
      </AuthLayoutStyled.AuthHeader>
      <Styled.Box>
        <Styled.Img>Image replacement is in progress. (An image will be added later)</Styled.Img>
        <Styled.Info>
          <h2>{t('form.deleteInfo')}</h2>
          <p>{t('form.message')}</p>
        </Styled.Info>
      </Styled.Box>
      <AuthLayoutStyled.Footer>
        <AuthLayoutStyled.LeftSideFooter />
        <AuthLayoutStyled.RightSideFooter>© 2021 Cloudike, Inc.</AuthLayoutStyled.RightSideFooter>
      </AuthLayoutStyled.Footer>
    </>
  );
};

export default DeleteAccountComplete;
