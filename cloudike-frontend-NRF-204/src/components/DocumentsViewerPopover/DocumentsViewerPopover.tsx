import React from 'react';
import { Link } from 'react-router-dom';
import { Popover } from '@material-ui/core';

import { useDownloadArchiveMutation, useDownloadUrlMutation } from '@api';
import { useReactiveVar } from '@apollo/client';
import { archiveHashVar, documentCurrentPathVar, documentVar } from '@store';
import { modalQuerys, paths } from '@utils/routes/profile-routes';
import { DocumentsViewerPopoverProps, DocumentType } from './DocumentsViewerPopover.types';

import { Styled } from './DocumentsViewerPopover.styled';

/**
 * need refactoring
 * use Link from react-router
 * create component for download button
 * move to documentsViewer folder
 */
const DocumentsViewerPopover: React.FC<DocumentsViewerPopoverProps> = ({
  isOpen,
  handleToggle,
  anchorEl,
  anchorPosition,
}) => {
  const [downloadArchive] = useDownloadArchiveMutation();
  const [downloadUrl] = useDownloadUrlMutation();
  const currentDocument = useReactiveVar(documentVar);
  const currentPath = useReactiveVar(documentCurrentPathVar);

  const handleDownload = async () => {
    if (currentDocument) {
      if (currentDocument.type === DocumentType.DocumentFolder) {
        const { data } = await downloadArchive({
          variables: {
            path: currentDocument.path,
          },
        });
        data?.downloadArchive.hash && archiveHashVar(data.downloadArchive.hash);
      } else if (currentDocument.type === DocumentType.DocumentFile) {
        const { data } = await downloadUrl({
          variables: {
            path: currentDocument.path,
          },
        });
        if (data?.downloadUrl.url) {
          const element = document.createElement('a');
          element.setAttribute('href', data?.downloadUrl.url);
          element.setAttribute('download', 'true');
          element.style.display = 'none';
          document.body.appendChild(element);
          element.click();
          document.body.removeChild(element);
        }
      }
    }
  };

  const handleClose = () => {
    handleToggle(false);
    documentVar(null);
  };

  const handleClick = () => {
    handleToggle(false);
  };

  return (
    <Popover
      open={isOpen}
      onClose={handleClose}
      anchorEl={anchorEl}
      anchorReference="anchorPosition"
      anchorPosition={anchorPosition}
      onClick={handleClick}
    >
      <Styled.ListWrapper>
        <Styled.ListItemWrapper button>
          <Styled.DocumentsViewerText variant="overline" display="block" onClick={handleDownload}>
            Download
          </Styled.DocumentsViewerText>
        </Styled.ListItemWrapper>
        <Styled.ListItemWrapper
          button
          component={Link}
          to={`/${paths.documents}?folder=${currentPath}&modal=${modalQuerys.documentsShare}`}
        >
          <Styled.DocumentsViewerText variant="overline" display="block">
            Share
          </Styled.DocumentsViewerText>
        </Styled.ListItemWrapper>
        <Styled.ListItemWrapper button>
          <Styled.DocumentsViewerText variant="overline" display="block">
            Bookmark
          </Styled.DocumentsViewerText>
        </Styled.ListItemWrapper>
        <Styled.ListItemWrapper button>
          <Styled.DocumentsViewerText variant="overline" display="block">
            Copy/Paste
          </Styled.DocumentsViewerText>
        </Styled.ListItemWrapper>
        <Styled.ListItemWrapper
          button
          component={Link}
          to={`/${paths.documents}?folder=${currentPath}&modal=${modalQuerys.documentsRename}`}
        >
          <Styled.DocumentsViewerText variant="overline" display="block">
            Rename
          </Styled.DocumentsViewerText>
        </Styled.ListItemWrapper>
        <Styled.ListItemWrapper
          button
          component={Link}
          to={`/${paths.documents}?folder=${currentPath}&modal=${modalQuerys.documentsDelete}`}
        >
          <Styled.DocumentsViewerText variant="overline" display="block">
            Delete
          </Styled.DocumentsViewerText>
        </Styled.ListItemWrapper>
        <Styled.ListItemWrapper button>
          <Styled.DocumentsViewerText variant="overline" display="block">
            Edit in Browser
          </Styled.DocumentsViewerText>
        </Styled.ListItemWrapper>
      </Styled.ListWrapper>
    </Popover>
  );
};

export default DocumentsViewerPopover;
