import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useDownloadUrlMutation } from '@api';
import { useReactiveVar } from '@apollo/client';
import { FilePreview } from '@components';
import { documentVar } from '@store';
import { modalQuerys } from '@utils/routes/profile-routes';
import { DocumentType } from './FileModal.types';

import { Styled } from './FileModal.styled';

const FileModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { search } = useLocation();
  const queryModal = new URLSearchParams(search).get('modal');
  const isDocumentEmpty = !useReactiveVar(documentVar);

  const [downloadUrl] = useDownloadUrlMutation();
  const currentDocument = useReactiveVar(documentVar);

  const handleDownload = async () => {
    if (currentDocument) {
      if (currentDocument.type === DocumentType.DocumentFile) {
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

  useEffect(() => {
    if (queryModal === modalQuerys.documentsFile && !isDocumentEmpty) {
      setIsOpen(true);
    } else if (isOpen || isDocumentEmpty) {
      setIsOpen(false);
    }
  }, [isOpen, queryModal, setIsOpen, isDocumentEmpty]);

  return (
    <Styled.Modal open={isOpen}>
      <FilePreview handleDownload={handleDownload} />
    </Styled.Modal>
  );
};

export default FileModal;
