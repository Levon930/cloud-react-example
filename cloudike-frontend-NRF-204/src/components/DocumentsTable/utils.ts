export const usageHandler = (bytes: number | undefined | null): string => {
  if (bytes === undefined || bytes === null) return '';
  const terabyte = 1099511627776;
  const gigabyte = 1073741824;
  const megabyte = 1048576;
  const kilobyte = 1024;
  const changeType = (item: number, type: number, typeName: string): string =>
    `${(item / type).toFixed(1)} ${typeName}`;
  const check = (item: number): string => {
    if (item >= terabyte) return changeType(item, terabyte, 'TB');
    if (item >= gigabyte) return changeType(item, gigabyte, 'GB');
    if (item >= megabyte) return changeType(item, megabyte, 'MB');
    if (item >= kilobyte) return changeType(item, kilobyte, 'KB');

    return `${item} bytes`;
  };

  return `${check(bytes)}`;
};

export const pathToName = (path: string): string => path.split('/').slice(-1)[0];

export const getLastPath = (path: string): string => path.split('/').slice(0, -1).join('');
