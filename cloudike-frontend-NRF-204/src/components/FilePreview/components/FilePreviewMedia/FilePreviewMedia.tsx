import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useDownloadUrlMutation } from '@api';
import { useReactiveVar } from '@apollo/client';
import { checkFile, FileType } from '@components';
import { toaster } from '@helpers';
import { documentVar } from '@store';

const FilePreviewMedia = () => {
  const [fileUrl, setFileUrl] = useState<string | undefined>('');
  const { name = '' } = useReactiveVar(documentVar) || {};
  const { extradata } = useReactiveVar(documentVar) || {};
  const { path = '' } = useReactiveVar(documentVar) || {};
  const linkOfFile = extradata?.thumbnails?.preview?.link || '';
  const [downloadUrl] = useDownloadUrlMutation();
  const { t } = useTranslation('filePreview');
  const linkType = checkFile(name);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await downloadUrl({
          variables: {
            path,
          },
        });
        setFileUrl(data?.downloadUrl.url);
      } catch (e) {
        toaster(t('filePreview.downloadErrorMessage'), 'error');
      }
    })();
  }, []);

  if (linkType === FileType.image) {
    return <img src={linkOfFile} alt={name} />;
  }
  if (linkType === FileType.video) {
    return <video height="800" width="500" src={fileUrl} controls />;
  }
  if (linkType === FileType.audio) {
    return <audio src={fileUrl} controls />;
  }

  return null;
};

export default FilePreviewMedia;
