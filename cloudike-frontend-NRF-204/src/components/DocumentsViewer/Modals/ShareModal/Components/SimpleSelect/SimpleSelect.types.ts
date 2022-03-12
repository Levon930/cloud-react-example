export type SimpleSelectProps = {
  change: any;
  name: string;
};

export enum SharePermissions {
  readAndWrite = 'readAndWrite',
  read = 'read',
}

export type SelectTypes = { name?: string | undefined; value: unknown };
