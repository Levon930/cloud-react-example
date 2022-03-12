export type DropzoneProps = Readonly<{
  name: string;
  setFieldValue: (dropzone: string, file: File) => void;
}>;
