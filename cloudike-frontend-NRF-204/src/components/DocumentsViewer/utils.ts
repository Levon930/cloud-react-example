export const getExtension = (name: string): string => name.split('.').slice(-1)[0];

export const pathToName = (path: string): string => path.split('/').slice(-1)[0];
