import {
  FileCommentSvg,
  FileDeleteSvg,
  FileDetailsSvg,
  FileDownloadSvg,
  FileHistorySvg,
  FileLinkShareSvg,
} from '@components/SvgComponents';

export const fileSvgs = [
  { id: 1, Component: FileDownloadSvg, title: 'Download' },
  { id: 2, Component: FileLinkShareSvg, title: 'Link share' },
  { id: 3, Component: FileCommentSvg, title: 'Comment' },
  { id: 4, Component: FileHistorySvg, title: 'File modification history' },
  { id: 5, Component: FileDetailsSvg, title: 'Details' },
  { id: 6, Component: FileDeleteSvg, title: 'Delete' },
];

export const fileActions = {
  Download: 'Download',
  Comment: 'Comment',
  Details: 'Details',
  Delete: 'Delete',
  LinkShare: 'Link share',
  FileModificationHistory: 'File modification history',
};
