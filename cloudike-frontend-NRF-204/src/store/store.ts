import { makeVar } from '@apollo/client';
import { Document, Group, User } from './Store.types';

const userVar = makeVar<null | User>(null);

const documentVar = makeVar<null | Document>(null);

const documentCurrentPathVar = makeVar('/');

const teamSettingsPageVar = makeVar(0);

const documentsPageItemsVar = makeVar<string[]>([]);

const archiveHashVar = makeVar('');

const documentExpandedVar = makeVar(false);

const documentSelectedVar = makeVar<Document[]>([]);

const teamSelectedVar = makeVar<User[]>([]);

const groupSelectedVar = makeVar<Group[]>([]);

const documentsItemsPerPageVar = makeVar(5);

const documentsPageVar = makeVar(0);

const documentsItemsTotal = makeVar(0);

const documentsOrderVar = makeVar<'desc' | 'asc'>('asc');

const documentsOrderByVar = makeVar<'path' | 'bytes' | 'modified'>('path');

export {
  userVar,
  teamSettingsPageVar,
  documentVar,
  documentCurrentPathVar,
  documentsPageItemsVar,
  archiveHashVar,
  documentExpandedVar,
  documentSelectedVar,
  teamSelectedVar,
  groupSelectedVar,
  documentsItemsPerPageVar,
  documentsPageVar,
  documentsItemsTotal,
  documentsOrderVar,
  documentsOrderByVar,
};
