export enum TypeOfShare {
  upload = 'upload',
  download = 'download',
}

export type PublicShareProps = {
  setShareType: (value: TypeOfShare) => void;
  shareType: TypeOfShare;
  folderName: string;
};

export type ValuesType = {
  password: string;
  limit: string;
};

export type requestDataType = {
  downloadMax?: number;
  password?: string;
  ttl?: any;
  upload_folder?: boolean;
  path: string;
};
