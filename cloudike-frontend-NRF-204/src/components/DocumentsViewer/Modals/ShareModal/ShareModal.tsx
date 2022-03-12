import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Tab } from '@material-ui/core';

import { useReactiveVar } from '@apollo/client';
import { useModal } from '@hooks';
import { documentCurrentPathVar, documentVar } from '@store';
import { modalQuerys, paths } from '@utils/routes/profile-routes';
import { CompanyFolderShare, PublicShare, TabPanel, TeamMemberShare } from './Components';
import { a11yProps, TypeOfShare } from './constants';
import { ShareModalProps } from './ShareModal.types';
import useShareModalTranslation from './useShareModalTranslation';

import 'date-fns';
import { Styled } from './ShareModal.styled';

const ShareModal: React.FC<ShareModalProps> = ({ folderName }) => {
  const currentPath = useReactiveVar(documentCurrentPathVar);
  const { RenderModal, isOpen, setIsOpen } = useModal(
    `${paths.documents}?folder=${currentPath}`,
    false,
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Modal = useMemo(() => RenderModal, [isOpen]);

  const [value, setValue] = useState<number>(0);
  const [shareType, setShareType] = useState<TypeOfShare>(TypeOfShare.upload);

  const { shareWithTeamLabel, shareLinklabel, designateLabel } = useShareModalTranslation();

  const handleChange = (event: ChangeEvent<any>, newValue: number) => {
    setValue(newValue);
  };

  const resetState = () => {
    setValue(0);
    setShareType(TypeOfShare.upload);
  };

  const { search } = useLocation();

  const queryModal = new URLSearchParams(search).get('modal');

  useEffect(() => {
    if (queryModal === modalQuerys.documentsShare) {
      setIsOpen(true);
    } else if (isOpen) {
      setIsOpen(false);
      resetState();
      documentVar(null);
    }
  }, [isOpen, queryModal, setIsOpen]);

  return (
    <Modal>
      <Styled.ModalWrapper>
        <Styled.TabsRow value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label={shareWithTeamLabel} {...a11yProps(0)} />
          <Tab label={shareLinklabel} {...a11yProps(1)} />
          <Tab label={designateLabel} {...a11yProps(2)} />
        </Styled.TabsRow>
        <TabPanel value={value} index={0}>
          <TeamMemberShare folderName={folderName} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PublicShare shareType={shareType} setShareType={setShareType} folderName={folderName} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CompanyFolderShare folderName={folderName} />
        </TabPanel>
      </Styled.ModalWrapper>
    </Modal>
  );
};

export default ShareModal;
