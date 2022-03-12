import React, { RefObject, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { ArrowBackIos } from '@material-ui/icons';

import { Maybe } from '@api';
import { useReactiveVar } from '@apollo/client';
import { usageHandler } from '@components/DocumentsTable/utils';
import { toaster } from '@helpers';
import { documentCurrentPathVar, documentVar } from '@store';
import { modalQuerys, paths } from '@utils/routes/profile-routes';
import {
  FileComments,
  FileDetails,
  FilePreviewDetails,
  FilePreviewMedia,
  FilePreviewTools,
} from './components';
import { fileActions, fileSvgs } from './FilePreview.constants';
import { FilePreviewProps } from './FilePreview.types';
import { checkFile } from './FilePreview.utils';

import { Styled } from './FilePreview.styled';

const FilePreview: React.FC<FilePreviewProps> = ({ handleDownload }) => {
  const [activeTool, setActiveTool] = React.useState<Maybe<string>>(null);
  const [infoBoxType, setInfoBoxType] = React.useState('Details');
  const [isInfoOpen, setIsInfoOpen] = React.useState(false);

  const { t } = useTranslation('filePreview');

  const downloadElement: RefObject<HTMLAnchorElement> = useRef(null);
  const history = useHistory();

  const { Download, Comment, Details, Delete, LinkShare, FileModificationHistory } = fileActions;

  const { name = '' } = useReactiveVar(documentVar) || {};
  const { bytes = 0 } = useReactiveVar(documentVar) || {};
  const { modified = '' } = useReactiveVar(documentVar) || {};
  const currentPath = useReactiveVar(documentCurrentPathVar);

  const linkType = checkFile(name);

  const handleShare = () => {
    history.push({
      search: `?modal=${modalQuerys.documentsShare}`,
    });
  };

  const handleToolAction: (toolId: number) => void = (toolId) => {
    const tool = fileSvgs.find((item) => item.id === toolId);

    if (tool && !checkIfIconDisabled(tool.title)) {
      setActiveTool(tool.title);
      switch (tool.title) {
        case Download:
          // TODO finish development when download feature will be ready
          handleDownload();
          setIsInfoOpen(false);

          return;
        case LinkShare:
          setIsInfoOpen(false);
          history.push({
            search: `?modal=${modalQuerys.documentsShare}`,
          });

          return;
        case Comment:
          setInfoBoxType(Comment);
          setIsInfoOpen(!isInfoOpen || activeTool !== tool.title);

          return;
        case FileModificationHistory:
          // TODO finish development when modification history feature will be ready
          return;
        case Details:
          setInfoBoxType(Details);
          setIsInfoOpen(!isInfoOpen || activeTool !== tool.title);

          return;
        case Delete:
          setIsInfoOpen(false);
          history.push({
            search: `?modal=${modalQuerys.documentsDelete}`,
          });

          // Todo finish development when delete feature will be ready
          return;
        default:
          toaster(t('filePreview.toolAction.errorMessage'), 'error');
      }
    }
  };

  const renderInfoBoxContent = () => {
    switch (infoBoxType) {
      case Comment:
        return <FileComments fileId={1} />;
      case Details:
        return (
          <FileDetails
            name={name}
            size={usageHandler(bytes)}
            dateOfModify={format(+modified, 'yyy.MM.dd hh:mm')}
          />
        );
      default:
        return <Styled.InfoTitle>Info</Styled.InfoTitle>;
    }
  };

  const checkIfIconDisabled: (iconAction: string) => boolean = (iconAction) => {
    const disabledActions = [Comment, FileModificationHistory];

    return !!disabledActions.find((action) => action === iconAction);
  };

  return (
    <Styled.Wrapper container>
      <Styled.Main item open={isInfoOpen}>
        <Styled.Header container>
          <Styled.HeaderTitle>
            <Link to={`/${paths.documents}?folder=${currentPath}`}>
              <ArrowBackIos />
              {name}
            </Link>
          </Styled.HeaderTitle>
        </Styled.Header>
        <Styled.MainContent>
          {linkType ? (
            <FilePreviewMedia />
          ) : (
            <FilePreviewDetails downloadElement={downloadElement} handleShare={handleShare} />
          )}
        </Styled.MainContent>
      </Styled.Main>
      <Styled.InfoBox item open={isInfoOpen}>
        {renderInfoBoxContent()}
      </Styled.InfoBox>
      <FilePreviewTools
        setActiveTool={setActiveTool}
        isInfoOpen={isInfoOpen}
        infoBoxType={infoBoxType}
        setIsInfoOpen={setIsInfoOpen}
        activeTool={activeTool}
        handleToolAction={handleToolAction}
        checkIfIconDisabled={checkIfIconDisabled}
      />
    </Styled.Wrapper>
  );
};

export default FilePreview;
