export const fileKeySelector = (file: any) =>
  file &&
  typeof file === 'object' &&
  'path' in file &&
  `${file?.path}-${file?.version}-${file?.bytes}`;
