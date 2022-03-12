export type CreateFolder = {
  path: string;
  created?: number;
  modified?: number;
};

export type Metadata = {
  path?: string;
  hash?: string;
  listing?: boolean;
  dirs_only?: boolean;
  deleted?: boolean;
  version?: boolean;
  extra?: boolean;
  offset?: number;
  limit?: number;
  order_by?: string;
};

export type DownloadUrl = {
  hash?: string;
  path: string;
  version?: number;
  for_view?: boolean;
  deleted?: boolean;
};

export type DownloadAsArchiveStream = {
  paths: string;
};

export type DownloadAsArchive = {
  paths: string;
};

export type BackgroundTask = {
  id: string;
};

export type Move = {
  from_path: string;
  to_path: string;
  overwrite?: boolean;
};

export type Copy = Move;

export type CreateFile = {
  path: string;
  overwrite?: boolean;
  version?: string;
  create_dirs?: boolean;
  created?: number;
  modified?: number;
  device_id?: string;
  device_reference?: string;
  size?: number;
  checksum?: string;
  multipart?: boolean;
};

export type UploadConfirm = {
  path: string;
  user_id: string;
  temp_name: string;
  overwrite?: boolean;
  version?: number;
  size?: number;
  checksum?: string;
};

export type MultiUploadConfirm = {
  confirm_urls: string;
};

export type DeleteItem = {
  path: string;
  only_empty?: boolean;
  without_trash?: boolean;
};

export type RestoreVersion = {
  path: string;
  version: string;
};

export type RenameFileOrFolder = {
  path: string;
  newname: string;
};

export type SetFavorite = {
  path: string;
};

export type ShareFolder = {
  path: string;
  member_login?: string;
  writer?: boolean;
  invitation?: string;
  public_view?: boolean;
  group_id?: string;
  lang?: string;
  use_folder_limit?: boolean;
  folder_limit?: number;
};

export type RemoveUserFromShared = {
  path: string;
  login: string;
};

export type AcceptSharing = {
  hash: string;
};

export type DeclineSharing = {
  hash: string;
};

export type UninviteFolder = {
  path: string;
  member_login?: boolean;
  group_id?: boolean;
};

export type UnshareFolder = {
  path: string;
};

export type Collaborators = {
  path: string;
};

export type UpdateCollaborator = {
  path: string;
  member_login: string;
  writer: boolean;
  group_id: string;
};

enum WhooseType {
  'my',
  'others',
  'company',
  'no value',
}

export type GetShares = {
  whoose?: WhooseType;
};

export type FolderSizeLimit = {
  path: string;
  owner_id: string;
  size_limit: number | string;
  enable: boolean;
};

export type AddFolderToCompanyShared = {
  path: string;
  public_name: string;
};

export type RemoveFolderFromCompanyShared = {
  folder_hash: string;
  path: string;
};

export type CompanySharedList = {
  folder_hash: string;
  offset: string;
  limit: string;
  show_all: string;
};

export type SharesCompanyShared = {
  name: string;
  offset?: number;
  limit?: number;
};

export type SendAccessRequest = {
  folder_hash: string;
  invitation: string;
};

export type AcceptSharingRequest = {
  folder_hash: string;
  writer: boolean;
};

export type CreatePublicLink = {
  path: string;
  ttl?: number;
  download_max?: number;
  password?: string | number;
  notify?: boolean;
  upload_folder?: boolean;
};

export type DeletePublicLink = {
  path: string;
};

export type PublicLinksList = {
  hash?: string;
};

export type PublicItemInfo = {
  hash: string;
  path?: string;
  for_view?: boolean;
};

export type PublicFolderMetadata = {
  hash: string;
  path?: string;
  dirs_only?: boolean;
  extra?: boolean;
  offset?: number;
  limit?: number;
};

export type HandoverPublicFolder = {
  path: string;
  member_id: string | number;
};

export type Trash = {
  dirs_only?: boolean;
  extra?: boolean;
  offset?: number;
  limit?: number;
};

export type RestoreItem = {
  paths: string;
  overwrite: boolean;
};

export type ClearTrash = {
  paths?: string;
};

export type TrashSharedItem = {
  path: string;
  dirs_only?: boolean;
  extra?: boolean;
  offset?: number;
  limit?: number;
};

export type RestoreSharedItem = {
  name: string;
  path: string;
  overwrite?: boolean;
};

export type SearchItem = {
  query: string;
  type: string;
  offset?: number;
  limit?: number;
};

export type PublicLinkInfo = {
  hash: string;
  author_lang?: string;
};

export type SecureFolderMetadata = {
  hash: string;
  path?: string;
  dirs_only?: boolean;
  extra?: boolean;
  offset?: number;
  limit?: number;
  password: string;
};
