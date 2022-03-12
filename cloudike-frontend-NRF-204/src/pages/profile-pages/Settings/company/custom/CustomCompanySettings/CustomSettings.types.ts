export interface DropzoneValue {
  dropzone: null | File;
}
export interface SetFieldValueProps {
  setFieldValue: (dropzone: string, file: File) => void;
}
