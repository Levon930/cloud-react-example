type ClientData = {
  created: number;
  modified: number;
};

type BaseMetadata = {
  owner_name: string;
  author: number;
  parent_company_published: boolean;
  deleted: boolean;
  author_name: string;
  is_in_trash: boolean;
  public_hash: string;
  client_data: ClientData;
  is_favorite: boolean;
  shared_hash: string | null;
  owner: number;
  path: string;
  owner_path: string;
  created: number;
  company_published: boolean;
  bytes: number;
  modified: number;
  version: number;
  role: string;
  author_lang: string;
  shared: boolean;
  folder: boolean;
  icon: string;
};

type MetaInfo = {
  status: string;
  height: number | null;
  width: number | null;
  creation_time: number;
  duration: number;
  video_bit_rate: number;
  video_codec_name: string;
  video_stream: boolean;
};

type Thumbnail = {
  link: string;
};

type Thumbnails = {
  status: string;
  small: Thumbnail;
  middle: Thumbnail;
  preview: Thumbnail;
};

type Videos = {
  status: string;
  vga: Thumbnail;
};

type ExtraData = {
  metainfo: MetaInfo;
  thumbnails: Thumbnails;
  videos: Videos;
};

export type FolderMetadata = BaseMetadata & {
  content: Array<FileMetadata | FolderMetadata>;
  is_last_page: boolean;
};

export type FileMetadata = BaseMetadata & {
  checksum: string;
  extradata: ExtraData;
  mime_type: string;
};

export type DownloadUrl = {
  url?: string;
  path: string;
  deleted: boolean;
  method: string;
  version: number;
  size: number;
  checksum: string;
  created: number;
  modified: number;
  client_data: any;
};

export type DownloadAsArchiveStream = {
  url: string;
  file_name: string;
  expired: number;
};

export type DownloadAsArchive = {
  taskid: string;
};

export type BackgroundTask = {
  url: string;
};

export type CreateFile = {
  url: string;
  parameters: any;
  headers: any;
  confirm_url: string;
  temp_path?: string;
};

export type MultiUploadConfirm = {
  taskid: string;
};

export type ShareFolder = {
  hash: string;
  login?: string;
};

export type SharingActions = {
  code: string;
  description: string;
};

export type Collaborators = Array<{
  owner: boolean;
  writer: boolean;
  status: string;
  userid: number;
  login: string;
  name: string;
  is_indirect: boolean;
}>;

export type AddFolderToCompanyShared = {
  owner_id: number;
  public_name: string;
  folder_hash: string;
};

export type CompanySharedList = Array<{
  status: string;
  owner_name: string;
  collaborators_count: number;
  company_published: boolean;
  creation_date: number;
  public_name: string;
  modification_time: number;
  folder_hash: string;
  path: string;
  shared: boolean;
  folder: boolean;
  owner_id: number;
  icon: string;
}>;

export type CompanySharedFolderInfo = Array<{
  owner_id: number;
  public_name: string;
  folder_hash: string;
  owner_name: string;
  collaborators_count: number;
  modification_time: number;
  status: string;
  waiting: boolean;
  requested: boolean;
  accepted: boolean;
}>;

export type SharesCompanyShared = Array<{
  bytes: number;
  creation_time: number;
  modification_time: number;
  owner_id: number | string;
  owner_name: string;
  shared_outside: boolean;
  src_path: string;
  type: 'share' | 'link';
}>;

export type AccessRequestsList = Array<{
  owner_id: number;
  owner_name: string;
  directory_name: string;
  writer: boolean;
  hash: string;
}>;

export type Invitations = Array<{
  hash: string;
  writer: boolean;
  directory_name: string;
  owner_name: string;
  owner_id: number;
}>;

export type PublicLinksList = Array<{
  created: number;
  deleted: boolean;
  bytes: number;
  modified: number;
  public_hash: string;
  version: number;
  path: string;
  folder: boolean;
  thumbnail: boolean;
  mime_type: string;
  icon: string;
}>;

export type PublicItemInfo = {
  url: string;
};

export type Trash = Array<
  (FileMetadata | FolderMetadata) & {
    name: string;
    restore_path: string;
  }
>;

export type RestoreItem = {
  taskid: string;
};

export type ClearTrash = RestoreItem;

export type RestoreSharedItem = RestoreItem;

export type SearchItem = {
  owner_name: string;
  created: number;
  deleted: boolean;
  checksum: string;
  author: number;
  bytes: number;
  modified: number;
  author_name: string;
  public_hash: string;
  version: number;
  extradata: ExtraData;
  client_data: any;
  owner: number;
  path: string;
  folder: boolean;
  mime_type: string;
  icon: string;
};

export type PublicLinkInfo = {
  created: string;
  expires: string;
  access_rights: string;
  author_lang: string;
  notify: boolean;
  download_max: number;
  download_count: number;
  password: boolean;
};
