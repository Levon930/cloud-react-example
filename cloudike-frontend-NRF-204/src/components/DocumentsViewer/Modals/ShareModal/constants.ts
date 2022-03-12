export const initialValues = {
  member: '',
  sharePermissions: '',
};

export function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export enum TypeOfShare {
  upload = 'upload',
  download = 'download',
}
