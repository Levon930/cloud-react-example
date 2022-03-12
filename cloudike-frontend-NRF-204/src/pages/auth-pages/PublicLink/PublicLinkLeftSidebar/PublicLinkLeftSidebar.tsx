import React from 'react';

import { FileDownloadSvg } from '@components/SvgComponents';
import { LeftSidebarProps } from './PublicLinkLeftSidebar.types';
import usePublicLinkLeftSidebarTranslation from './usePublicLinkLeftSidebarTranslation';

import { Styled } from '../PublicLink.styled';

const PublicLinkLeftSidebar: React.FC<LeftSidebarProps> = ({ download }) => {
  const { Download, Upload } = usePublicLinkLeftSidebarTranslation();

  return (
    <Styled.PublicLinkMenu>
      <Styled.ListWrapper>
        <Styled.ListItemWrapper isActive>
          <Styled.ListItemIconWrapper>
            <FileDownloadSvg isActive />
          </Styled.ListItemIconWrapper>
          <Styled.ListItemTextWrapper primary={download ? Download : Upload} />
        </Styled.ListItemWrapper>
      </Styled.ListWrapper>
    </Styled.PublicLinkMenu>
  );
};

export default PublicLinkLeftSidebar;
