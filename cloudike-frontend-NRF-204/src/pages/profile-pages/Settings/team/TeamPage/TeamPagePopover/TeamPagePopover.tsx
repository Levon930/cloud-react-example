import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';
import Popover from '@material-ui/core/Popover';

import { modalQuerys, paths as settingsPaths } from '@utils/routes/settings-routes';
import { TeamPagePopoverProps } from './TeamPagePopover.types';

import { Styled } from './TeamPagePopover.styled';

const DocumentsViewerPopover: React.FC<TeamPagePopoverProps> = ({
  isOpen,
  handleToggle,
  anchorEl,
  anchorPosition,
  isActive,
}) => {
  const { push } = useHistory();
  const { t } = useTranslation('teamPage');

  const handleBlock = () => {
    push({
      search: `modal=${isActive ? modalQuerys.teamMemberBlock : modalQuerys.teamMemberUnblock}`,
    });
  };

  return (
    <Popover
      open={isOpen}
      onClose={() => handleToggle(false)}
      anchorEl={anchorEl}
      anchorReference="anchorPosition"
      anchorPosition={anchorPosition}
      onClick={() => handleToggle(false)}
    >
      <Styled.ListWrapper>
        <Styled.ListItemWrapper onClick={handleBlock} button>
          <Styled.DocumentsViewerText variant="overline" display="block">
            {isActive ? t('contextMenu.block') : t('contextMenu.unblock')}
          </Styled.DocumentsViewerText>
        </Styled.ListItemWrapper>
        <Styled.ListItemWrapper
          component={Link}
          to={`/${settingsPaths.teamMember}?modal=${modalQuerys.teamMemberChangePassword}`}
          button
        >
          <Styled.DocumentsViewerText variant="overline" display="block">
            {t('contextMenu.changePassword')}
          </Styled.DocumentsViewerText>
        </Styled.ListItemWrapper>
        <Styled.ListItemWrapper
          component={Link}
          to={`/${settingsPaths.teamMember}?modal=${modalQuerys.teamMemberDetailedAuthority}`}
          button
        >
          <Styled.DocumentsViewerText variant="overline" display="block">
            {t('contextMenu.detailedAuthority')}
          </Styled.DocumentsViewerText>
        </Styled.ListItemWrapper>
        <Styled.ListItemWrapper
          component={Link}
          to={`/${settingsPaths.teamMember}?modal=${modalQuerys.teamMemberSetExpirationDate}`}
          button
        >
          <Styled.DocumentsViewerText variant="overline" display="block">
            {t('contextMenu.expirationDate')}
          </Styled.DocumentsViewerText>
        </Styled.ListItemWrapper>
        <Styled.ListItemWrapper
          component={Link}
          to={`/${settingsPaths.teamMember}?modal=${modalQuerys.teamMemberSetStorage}`}
          button
        >
          <Styled.DocumentsViewerText variant="overline" display="block">
            {t('contextMenu.setStorageSize')}
          </Styled.DocumentsViewerText>
        </Styled.ListItemWrapper>
      </Styled.ListWrapper>
    </Popover>
  );
};

export default DocumentsViewerPopover;
