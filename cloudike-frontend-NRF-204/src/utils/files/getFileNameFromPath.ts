import { Maybe } from '@api';

export const getFileNameFromPath = (path?: Maybe<string>) => {
  if (path && path.includes('/')) {
    return path.split('/').reverse()[0];
  }

  return 'NO DATA';
};
