export type ComponentProps = {
  open: boolean;
};

export type ToolTypes = {
  disabled: boolean;
};

export type FilePreviewProps = {
  handleDownload: () => void;
};

export enum FileType {
  audio = 'audio',
  video = 'video',
  image = 'image',
}
