import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Button } from '@material-ui/core';

import { useAddFolderToCompanySharedMutation } from '@api';
import { useReactiveVar } from '@apollo/client';
import { FileDetailsSvg } from '@components/SvgComponents';
import { toaster } from '@helpers';
import { documentCurrentPathVar } from '@store';
import { CompanyFolderShareProps } from './CompanyFolderShare.types';
import useTranslate from './useCompanyFolderShareTranslation';

import { Styled } from '../ShareModalComponents.styled';

const CompanyFolderShare: React.FC<CompanyFolderShareProps> = ({ folderName }) => {
  const currentPath = useReactiveVar(documentCurrentPathVar);
  const [release, setRelease] = useState(false);
  const history = useHistory();

  const [addFolderToCompanySharedMutation] = useAddFolderToCompanySharedMutation();

  const {
    addFolderToCompanySharesToaster,
    addFolderToCompanySharesError,
    companyFolderInfo,
    releaseButton,
    closeButton,
    applyButton,
  } = useTranslate();

  const handleClick = async () => {
    setRelease(true);
  };
  const closeModal = () => {
    history.push({ search: `?folder=${currentPath}` });
  };
  const clickHandler = async () => {
    const dataFolder = {
      path: `/${folderName}`,
      public_name: folderName,
    };
    try {
      await addFolderToCompanySharedMutation({
        variables: { input: dataFolder },
      });
      toaster(addFolderToCompanySharesToaster, 'success');
    } catch (e) {
      toaster(addFolderToCompanySharesError, 'error');
    }
  };

  return (
    <>
      <Styled.CompanyFolderInfo>
        <FileDetailsSvg />
        {companyFolderInfo}
      </Styled.CompanyFolderInfo>
      {release ? (
        <Styled.ButtonsRow>
          <Button color="primary" variant="contained" onClick={clickHandler}>
            {releaseButton}
          </Button>
          <Button color="primary" variant="contained" onClick={closeModal}>
            {closeButton}
          </Button>
        </Styled.ButtonsRow>
      ) : (
        <Styled.ApplyButtonRow>
          <Button color="secondary" variant="outlined" onClick={closeModal}>
            {closeButton}
          </Button>
          <Button color="primary" variant="contained" onClick={handleClick}>
            {applyButton}
          </Button>
        </Styled.ApplyButtonRow>
      )}
    </>
  );
};

export default CompanyFolderShare;
