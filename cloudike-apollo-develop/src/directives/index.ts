import { IDirectiveResolvers } from 'graphql-tools';
import { convertFilePath } from './convertFilePath';

export const directiveResolvers: IDirectiveResolvers = {
  convertFilePath,
};
