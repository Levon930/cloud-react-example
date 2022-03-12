export interface Items {
  names: string[];
  push: (path: any) => void;
  parent: string;
  selected?: any[];
  handleUpload?: (files: File[]) => void;
  handleDownload?: () => void;
  currentPath?: string;
}

export enum DocumentType {
  DocumentFolder = 'DocumentFolder',
  DocumentFile = 'DocumentFile',
}
