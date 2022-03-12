import { RefObject } from 'react';

export type FilePreviewDetailsProps = {
  downloadElement: RefObject<HTMLAnchorElement>;
  handleShare: () => void;
};
