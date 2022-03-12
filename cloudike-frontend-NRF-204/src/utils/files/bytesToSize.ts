export const bytesToSize = (bytes: number, radix = 1) => {
  if (bytes === 0) return '0 Bytes';
  const c = radix < 0 ? 0 : radix;
  const d = Math.floor(Math.log(bytes) / Math.log(1024));

  return `${parseFloat((bytes / Math.pow(1024, d)).toFixed(c))} ${
    ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'][d]
  }`;
};
